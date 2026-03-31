import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export const LIMITS = { name: 30, email: 40, subject: 100, message: 1000 };

const EMAILJS_CONFIG = {
  serviceId:  "service_9bemwx6",
  templateId: "template_qg3hcpy",
  publicKey:  "4oRDTxbXXClvyPKLZ",
};

export function useContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange" });

  const [isLoading,    setIsLoading]    = useState(false);
  const [showModal,    setShowModal]    = useState(false);
  const [showConfirm,  setShowConfirm]  = useState(false);
  const [pendingData,  setPendingData]  = useState(null);
  const [cooldown,     setCooldown]     = useState(0);

  const formRef     = useRef(null);
  const cooldownRef = useRef(null);
  const watched     = watch();

  useEffect(() => {
    return () => { if (cooldownRef.current) clearInterval(cooldownRef.current); };
  }, []);

  const onSubmit = (data) => {
    if (cooldown > 0 || isLoading) return;
    setPendingData(data);
    setShowConfirm(true);
  };

  const handleConfirmSend = async () => {
    setShowConfirm(false);
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      setShowModal(true);
      reset();
      setPendingData(null);
      setCooldown(60);
      cooldownRef.current = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) { clearInterval(cooldownRef.current); return 0; }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Failed to send email:", err);
      alert("Sorry, failed to send message. Please try again or email me directly at openacarlos@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const fieldCls = (name) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all bg-white ${
      errors[name] ? "border-red-300 bg-red-50/40" : "border-gray-200 hover:border-gray-300"
    }`;

  const charCount  = (field) => watched[field]?.length ?? 0;
  const isDisabled = isLoading || cooldown > 0;

  const RULES = {
    name: {
      required: "Please enter your full name",
      minLength: { value: 2,            message: "At least 2 characters" },
      maxLength: { value: LIMITS.name,  message: `Maximum ${LIMITS.name} characters` },
      pattern:   { value: /^[a-zA-Z\s'-]+$/, message: "Letters, spaces and hyphens only" },
    },
    email: {
      required: "Please enter your email address",
      maxLength: { value: LIMITS.email, message: `Maximum ${LIMITS.email} characters` },
      pattern:   { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" },
    },
    subject: {
      required:  "Please enter a subject",
      minLength: { value: 3,               message: "At least 3 characters" },
      maxLength: { value: LIMITS.subject,  message: `Maximum ${LIMITS.subject} characters` },
    },
    message: {
      required:  "Please write your message",
      minLength: { value: 10,              message: "At least 10 characters" },
      maxLength: { value: LIMITS.message,  message: `Maximum ${LIMITS.message} characters` },
    },
  };

  return {
    formRef,
    register,
    handleSubmit,
    errors,
    RULES,
    isLoading,
    isDisabled,
    cooldown,
    showModal,    setShowModal,
    showConfirm,  setShowConfirm,
    pendingData,
    onSubmit,
    handleConfirmSend,
    charCount,
    fieldCls,
  };
}
