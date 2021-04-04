import React from 'react';
import { Link } from 'react-router-dom';
import s from './Logo.module.css';
import logo from '../../../images/logo.svg';

function Logo() {
  return (
    <div className={s.logoBox}>
      <Link to="/" className={s.logoLink}>
        <img src={logo} alt="logo" width="128" height="28" />
      </Link>
    </div>
  );
}

export default Logo;
