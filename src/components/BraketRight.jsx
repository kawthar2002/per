import React from 'react';

export const BraketRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="90"
      viewBox="0 0 20 90"
    >
      <rect
        x="20"
        y="90"
        width="6"
        height="90"
        transform="rotate(-180 20 90)"
        fill="currentColor"
      />
      <rect
        y="90"
        width="6"
        height="20"
        transform="rotate(-90 0 90)"
        fill="currentColor"
      />
      <rect
        y="6"
        width="6"
        height="20"
        transform="rotate(-90 0 6)"
        fill="currentColor"
      />
    </svg>
  );
};
