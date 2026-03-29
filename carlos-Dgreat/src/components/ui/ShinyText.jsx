import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 3, className = '', baseColor = '#b5b5b5', shineColor = '#ffffff' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animationDuration: animationDuration,
        willChange: 'background-position',
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
