'use client';
import React, { useState } from 'react';

export const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {isHovered ? (
        <button
          className="button button--hovered"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="button__decor"></span>
          <span className="button__text">записаться</span>
        </button>
      ) : (
        <button
          className="button "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="button__decor"></span>
          <span className="button__text">rec</span>
        </button>
      )}
    </div>
  );
};
