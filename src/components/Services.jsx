import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SoundSmall from '../../public/svg/sound_small.svg';

export const Services = () => {
  const services = [
    { id: '1', title: 'поможем создать сценарий', number: '01' },
    { id: '2', title: 'смонтировать выпуск', number: '02' },
    { id: '3', title: 'продвинуть на медиа площадках', number: '03' },
  ];
  return (
    <nav className="services">
      <ul className="services__nav">
        {services.map(({ id, title, number }) => (
          <Link className="services__link" href="#" key={id}>
            <div className='num__line'>
              <span className="num">{number}</span>
              <Image src={SoundSmall} alt='sound'/>
            </div>
            <span className='services__title'>{title}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
