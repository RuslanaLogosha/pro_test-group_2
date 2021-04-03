import React from 'react';
import s from './Modal.module.css';
import signOut from '../../../images/sign-out.svg';

function Modal({ onClick, isLoggedIn }) {
  return isLoggedIn ? (
    <div className={s.modal}>
      <ul className={s.modalList}>
        <li className={s.listItem}>
          <a href="/">Home</a>
        </li>
        <li className={s.listItem}>
          <a href="/">Materials</a>
        </li>
        <li className={s.listItem}>
          <a href="/">Contacts</a>
        </li>
        <li className={s.listItem}>
          <div onClick={onClick}>
            <img src={signOut} alt="signOutButton" width="16" height="16"></img>
          </div>
        </li>
      </ul>
    </div>
  ) : (
    <div className={s.modal}>
      <ul className={s.modalList}>
        <li className={s.listItem}>
          <a href="/">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
