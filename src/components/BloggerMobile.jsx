import React from 'react';
import Image from 'next/image';
import Play from '../../public/svg/play_small.svg';

export const BloggerMobile = ({ name, profession, src }) => {
  return (
    <div className="blogger-mobile">
      <Image src={src}  alt='blogger'/>

      <div className=" blogger-mobile__title">
        <Image
          alt="play"
          src={Play}
          style={{ marginRight: '10px', position: 'relative', top: '2px' }}
        />
        <span className="blogger__name">{name}</span>
        <span className="blogger__border"></span>
        <span className="blogger__profession">{profession}</span>
      </div>
    </div>
  );
};
