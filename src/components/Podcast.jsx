import React from 'react';
import Image from 'next/image';
import SoundLeft from '../../public/svg/sound_left.svg';
import SoundRight from '../../public/svg/sound_right.svg';
import { WhoTitle } from './WhoTitle';
import { Blogger } from './Blogger';
import Avatar5 from '../../public/podcasts/avatar__roman.svg';
import Avatar2 from '../../public/podcasts/avatar__artur.svg';
import Avatar3 from '../../public/podcasts/avatar__anna.svg';
import Avatar4 from '../../public/podcasts/avatar__lera.svg';
import Avatar1 from '../../public/podcasts/avatar__sveta.svg';
import Link from 'next/link';
import { BloggerMobile } from './BloggerMobile';
export const Podcast = () => {
  return (
    <section className="podcast">
      <div className="podcast__wrapper">
        <div className="wrapper">
          <h2>У тебя уже есть популярный подкаст?</h2>
          <div className="podcast__line">
            <Image className="podcast__decor" src={SoundLeft} alt="decor" />
            <WhoTitle title="искать гостей просто" />
            <Image className="podcast__decor" src={SoundRight} alt="decor" />
          </div>
          <div className="blogger__line">
            <Blogger
              name="СВЕТА"
              profession="блогер"
              src={Avatar1}
              background="blogger__img pink"
            />
            <div className="podcast__text">
              <p>
                Удобный
                <Link href="#">
                  <span> способ найти гостей </span>
                </Link>
                в свой профессиональный подкаст
              </p>
              <p>
                Какая бы профессия у тебя не была и в какой бы точне мира ты не
                находился -
                <Link href="#">
                  <span> мы сможем найти </span>
                </Link>
                гостя со схожими интересами и взглядами
              </p>
            </div>
            <Blogger
              name="АРТУР"
              profession="разработчик"
              src={Avatar2}
              background="blogger__img green"
            />
          </div>
          <div className="blogger__line blogger__line--wide">
            <BloggerMobile
              name="АННА"
              profession="художник"
              src={Avatar3}
              background="blogger__img purple"
            />
            <Blogger
              name="ЛЕРА"
              profession="капитан"
              src={Avatar4}
              background="blogger__img orange"
            />
            <BloggerMobile
              name="ROMAN"
              profession="писатель"
              src={Avatar5}
              background="blogger__img yellow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
