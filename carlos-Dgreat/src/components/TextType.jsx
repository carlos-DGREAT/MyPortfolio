import React, { useState, useEffect, useMemo } from 'react';

const TextType = ({
  text,
  speed = 100,
  cursor = true,
  loop = true,
  deleteSpeed = 50,
  delay = 1500,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const currentText = textArray[textIndex];

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }
    };

    if (!isDeleting && displayedText === currentText) {
      if (loop || textIndex < textArray.length - 1) {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }, 500);
    } else {
      timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, textArray, speed, deleteSpeed, delay, loop, currentText]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TextType;
