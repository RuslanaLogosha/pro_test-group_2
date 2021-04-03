import React from 'react';
import s from './Burger.module.css';
import burger from '../../../images/menu-24px.svg';
import close from '../../../images/close.svg';

function Burger({ isModalOpen, onClick }) {
  return (
    <div className={s.burgerBox}>
      <div className={s.burger} onClick={onClick}>
        {!isModalOpen && (
          <img src={burger} alt="burger" width="20" height="20"></img>
        )}
        {isModalOpen && (
          <img src={close} alt="close" width="20" height="20"></img>
        )}
      </div>
    </div>
  );
}

export default Burger;
