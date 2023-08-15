import React from 'react';
import { LinkBtn } from './LinkBtn';
import { Services } from './Services';

export const ToBegin = () => {
  return (
    <section className="tobegin">
      <div className="wrapper">
        <h2>что нужно, чтобы начать?</h2>
        <div className="tobegin__links">
          <div className="tobegin__link">
            <h4>Все, что от тебя необходимо - </h4>
            <LinkBtn text="просто заполни анкету" />
          </div>
          <div className="tobegin__link tobegin__link--black">
            <h4>А мы сделаем все остальное</h4>
            <LinkBtn text="найдем человека " />
          </div>
        </div>
        <h3 className="tobegin__subtitle">
          и если потребуется, мы так же можем:
        </h3>
        <Services />
      </div>
    </section>
  );
};
