import React from 'react';
import s from './Logo.module.css';
import logo from '../../../images/logo.svg';

function Logo() {
  return (
    <div className={s.logoBox}>
      {/* позже тут будет линк */}
      <a href="/" className={s.logoLink}>
        <img src={logo} alt="logo" width="128" height="28" />
      </a>
    </div>
  );
}

export default Logo;
