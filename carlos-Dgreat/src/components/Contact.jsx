import { Mail, Phone, MapPin, Send, CheckCircle, X, ThumbsUp, User, AtSign, MessageSquare } from "lucide-react";
import { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ShinyText from './ui/ShinyText';
import { useContactForm, LIMITS } from '../hooks/useContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const {
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
  } = useContactForm();

  const headerRef   = useRef(null);
  const leftColRef  = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    const once = { toggleActions: 'play none none reset' };

    gsap.fromTo(Array.from(headerRef.current?.children ?? []),
      { opacity: 0, y: 40, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out', stagger: 0.2,
        clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: headerRef.current, start: 'top bottom-=8%', ...once } });

    gsap.fromTo(leftColRef.current,
      { opacity: 0, x: -70, filter: 'blur(6px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
        clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: leftColRef.current, start: 'top bottom-=5%', ...once } });

    gsap.fromTo(rightColRef.current,
      { opacity: 0, x: 70, filter: 'blur(6px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out', delay: 0.15,
        clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: rightColRef.current, start: 'top bottom-=5%', ...once } });
  }, {});

  return (
    <>
      {/* ── Confirmation Modal ── */}
      {showConfirm && pendingData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Confirm Your Message</h3>
                  <p className="text-gray-400 text-xs mt-0.5">Please review before sending</p>
                </div>
              </div>
              <button
                onClick={() => setShowConfirm(false)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Summary */}
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <User className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">From</p>
                  <p className="text-sm font-medium text-gray-800 truncate">{pendingData.name}</p>
                  <p className="text-xs text-gray-500 truncate">{pendingData.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <AtSign className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">Subject</p>
                  <p className="text-sm font-medium text-gray-800 truncate">{pendingData.subject}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">Message</p>
                  <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{pendingData.message}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="btn-3d-gray flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium text-sm transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirmSend}
                className="btn-3d flex-1 px-4 py-3 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Success Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-red-900 via-gray-800 to-gray-900" />

            <div className="px-8 pt-8 pb-7 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg mb-5">
                <ThumbsUp className="w-9 h-9 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Thanks for reaching out. I'll get back to you within <span className="font-semibold text-gray-800">24 hours</span>.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="btn-3d w-full py-3 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl font-semibold text-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Section ── */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 overflow-hidden bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/backdrop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/50" />
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-black/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-black/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-red-900/10 text-red-900 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent mb-4 py-2 leading-tight">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* LEFT COLUMN */}
            <div ref={leftColRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-8">Contact Information</h3>

                <div className="space-y-5 sm:space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-black/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <a href="tel:+639485942455" className="text-base sm:text-lg text-gray-800 font-medium hover:text-black transition-colors">
                        +63 948 594-2455
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-black/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:openacarlos@gmail.com" className="text-base sm:text-lg text-gray-800 font-medium hover:text-black transition-colors break-all">
                        openacarlos@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-black/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-base sm:text-lg text-gray-800 font-medium">Baguio City, Philippines</p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-sm text-gray-600">Available for freelance work</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div ref={rightColRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Send a Message</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">Fill out the form below and I'll get back to you shortly.</p>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Full Name <span className="text-gray-400 font-normal text-xs">*</span>
                      </label>
                      <input
                        type="text"
                        maxLength={LIMITS.name}
                        placeholder="John Doe"
                        className={fieldCls('name')}
                        {...register('name', RULES.name)}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Email <span className="text-gray-400 font-normal text-xs">*</span>
                      </label>
                      <input
                        type="email"
                        maxLength={LIMITS.email}
                        placeholder="john@example.com"
                        className={fieldCls('email')}
                        {...register('email', RULES.email)}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Subject <span className="text-gray-400 font-normal text-xs">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={LIMITS.subject}
                      placeholder="What's this about?"
                      className={fieldCls('subject')}
                      {...register('subject', RULES.subject)}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Message <span className="text-gray-400 font-normal text-xs">*</span>
                    </label>
                    <textarea
                      rows="4"
                      maxLength={LIMITS.message}
                      placeholder="Tell me about your project..."
                      className={`${fieldCls('message')} resize-none`}
                      {...register('message', RULES.message)}
                    />
                    <div className="flex justify-between items-center mt-1.5">
                      {errors.message
                        ? <p className="text-xs text-red-400">{errors.message.message}</p>
                        : <span />}
                      {charCount('message') > 0 && (
                        <span className={`text-xs tabular-nums ml-auto ${
                          charCount('message') >= LIMITS.message * 0.9 ? 'text-amber-500' : 'text-gray-300'
                        }`}>
                          {charCount('message')}/{LIMITS.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className={`btn-3d w-full px-6 py-4 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 group ${isDisabled ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </>
                    ) : cooldown > 0 ? (
                      <>Please wait {cooldown}s</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <ShinyText text="Send Message" speed={3} baseColor="#ffffff" shineColor="#aaaaaa" />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
