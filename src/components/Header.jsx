import React from 'react';
import Image from 'next/image';
import Battery from '../../public/svg/battery.svg';
import Scale from '../../public/svg/scale.svg';
import Logo from '../../public/svg/logo.svg';
import { Button } from './Button';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="border">
            <div className="border__item top-left" />
            <div className="border__item top-right" />
            <div className="header__content">
              <div className="header__line header__line--top">
                <Image src={Battery} className='battery' alt='battery'/>
                <h3 className="header__title">
                  [ студия подкастов, <br />
                  которая объединяет людей ]
                </h3>
                <div className="logo-small">
                  <span className="logo-small__decor"></span>
                  <h5 className="logo-small__text">peredelano</h5>
                </div>
              </div>
              <div className="header__logo">
                <Image src={Logo} alt='logo' />
              </div>
              <Nav />
              <div className="header__btn">
                <Button />
              </div>
              <div className="header__line header__line--bottom">
                <h4 className="date">24.06.2023</h4>
                <Image src={Scale} alt='scale' />
                <div className="gps">
                  <h4>41°41.6466′</h4>
                  <h4>44°50.0208′</h4>
                </div>
              </div>
            </div>
            <div className="border__item bottom-left" />
            <div className="border__item bottom-right" />
          </div>
        </div>
      </div>
    </header>
  );
};
