import React from 'react';

function LayoutWidth({ children, className }) {
  return (
    <div className={`max-w-[1240px] px-5 mx-auto ${className}`}>{children}</div>
  );
}

export default LayoutWidth;
