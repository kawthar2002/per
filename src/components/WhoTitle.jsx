import React from 'react';
import Image from 'next/image';
import Left from '../../public/svg/left.svg';
import Right from '../../public/svg/right.svg';

export const WhoTitle = ({ title }) => {
  return (
    <div className="who__title">
      <Image src={Left} alt="left" />
      <h3>{title}</h3>
      <Image src={Right} alt="right" />
    </div>
  );
};
