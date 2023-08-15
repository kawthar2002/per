import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Tg from '../../public/svg/tg.svg';
import Youtube from '../../public/svg/youtube.svg';
import Twitter from '../../public/svg/twitter.svg';

export const Socials = () => {
  const socials = [
    {
      id: '1',
      src: Youtube,
    },
    { id: '2', src: Tg },
    {
      id: '3',
      src: Twitter,
    },
  ];
  return (
    <ul className="socials__list">
      {socials.map(({ src, id }) => (
        <Link href="#" className="socials__link" key={id}>
          <Image src={src} width={50} height={50} alt="socials" />
        </Link>
      ))}
    </ul>
  );
};
