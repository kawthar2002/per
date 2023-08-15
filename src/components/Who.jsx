import React from 'react';
import Image from 'next/image';
import Img from '../../public/img.png';
import Play from '../../public/svg/play.svg';
import Sound from '../../public/svg/sound.svg';
import { WhoTitle } from './WhoTitle';

export const Who = () => {
  return (
    <section className="who">
      <div className="wrapper">
        <div className="who__wrapper">
          <div className="who__line">
            <WhoTitle title="найти друг друга просто" />
            <div className="who__block who__block--right">
              <div className="who__text">
                <Image src={Play} alt='play'/>
                <p>
                  Это Костя. Костя любит открывать стартапы и хочет найти и
                  пообщаться с людьми, у которых есть похожий опыт или интерес к
                  такой теме.
                </p>
              </div>
              <Image className="who__img" src={Img} alt='who'/>
            </div>
          </div>
          <div className="who__line who__line--sound">
            <WhoTitle title="начать с нами легко" />
            <Image className="who__img" src={Sound} alt='sound' />
          </div>
          <div className="who__line">
            <WhoTitle title="контент важнее студии" />
            <div className="who__block">
              <div className="who__text">
                <Image src={Play} alt='play'/>
                <p>
                  Это Марина. И она уже дизайнер в трех стартапах и ей есть что
                  рассказать, но был огромный страх начать, и казалось что без
                  проф. аппаратуры это нереально
                </p>
              </div>
              <Image className="who__img" src={Img} alt='who'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
