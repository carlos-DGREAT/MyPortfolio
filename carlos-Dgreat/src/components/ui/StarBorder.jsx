import React from 'react';

export default function StarBorder({
  as: Tag = 'div',
  children,
  color = '#ffffff',
  speed = 6,
  borderWidth = 1.5,
  className = '',
  innerClassName = '',
  style,
  ...rest
}) {
  return (
    <Tag
      className={`star-border ${className}`}
      style={{
        '--star-color': color,
        '--star-speed': `${speed}s`,
        '--border-width': `${borderWidth}px`,
        ...style,
      }}
      {...rest}
    >
      <span className="star-border__glow" aria-hidden="true" />
      <span className={`star-border__inner ${innerClassName}`}>{children}</span>
    </Tag>
  );
}
