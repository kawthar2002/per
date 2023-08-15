import React from 'react';

export const BraketLeft = () => {
  return (
    <svg
      width="20"
      height="90"
      viewBox="0 0 20 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="6" height="90" fill="currentColor" />
      <rect
        x="20"
        width="6"
        height="20"
        transform="rotate(90 20 0)"
        fill="currentColor"
      />
      <rect
        x="20"
        y="84"
        width="6"
        height="20"
        transform="rotate(90 20 84)"
        fill="currentColor"
      />
    </svg>
  );
};
