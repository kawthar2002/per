'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BraketRight } from './BraketRight';
import { BraketLeft } from './BraketLeft';

export const LinkBtn = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="link-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="#">
        <BraketLeft />
        {isHovered ? (
          <h3 className="link-button__text">записаться</h3>
        ) : (
          <h3 className="link-button__text">{text}</h3>
        )}
        <BraketRight />
      </Link>
    </div>
  );
};
