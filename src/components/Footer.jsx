import React from 'react';
import Image from 'next/image';
import Logo from '../../public/svg/logo_footer.svg';
import { Socials } from './Socials';
import { Button } from './Button';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="wrapper">
          <div className="footer__top">
            <Image className='footer__logo' src={Logo} alt='footer-logo'/>
            <div className="footer__btn">
              <Button />
            </div>
          </div>
          <div className="socials">
            <h3 className='socials__title'>наши социальные сети:</h3>
            <Socials />
          </div>
          <div className="footer__bottom">
            <h5>all rights reserved</h5>
            <h5>peredelano, 2023</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};
