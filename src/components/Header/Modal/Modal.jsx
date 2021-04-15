import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Modal.module.css';
import signOut from '../../../images/sign-out.svg';

function Modal({ onClick, isLoggedIn, closeModal }) {
  return isLoggedIn ? (
    <div className={s.modal}>
      <ul className={s.modalList}>
        <li className={s.listItem}>
          <NavLink
            to="/"
            activeClassName={s.activeLink}
            className={s.link}
            exact={true}
            onClick={closeModal}
          >
            Home
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/materials"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeModal}
          >
            Materials
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/contacts"
            activeClassName={s.activeLink}
            className={s.link}
            onClick={closeModal}
          >
            Contacts
          </NavLink>
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
          <NavLink to="/contacts" className={s.link} onClick={closeModal}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
