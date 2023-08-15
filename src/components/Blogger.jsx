import React from 'react';
import Image from 'next/image';
import Play from '../../public/svg/play.svg';

export const Blogger = ({ name, profession, src }) => {
  return (
    <div className="blogger">
      <Image src={src} className="blogger__img" alt="blogger" />
      <div className=" blogger__title">
        <Image
          alt="play"
          src={Play}
          style={{ marginRight: '14px', position: 'relative', top: '4px' }}
        />
        <span className="blogger__name">{name}</span>
        <span className="blogger__border"></span>
        <span className="blogger__profession">{profession}</span>
      </div>
    </div>
  );
};
