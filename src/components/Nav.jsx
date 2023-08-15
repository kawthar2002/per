import Link from 'next/link';
import React from 'react';

export const Nav = (props) => {
  const navigation = [
    { id: '1', title: 'что это', number: '01' },
    { id: '2', title: 'как это работает', number: '02' },
    { id: '3', title: 'как объединиться', number: '03' },
    { id: '4', title: 'контакты', number: '04' },
  ];
  return (
    <nav className="header__nav">
      <ul className="nav">
        {navigation.map(({ id, title, number }) => (
          <Link className="nav__link" href="#" key={id}>
            <span className="num">{number}</span>
            <span>{title}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
