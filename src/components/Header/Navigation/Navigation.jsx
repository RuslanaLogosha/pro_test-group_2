import React from 'react';
import s from './Navigation.module.css';

function Navigation({ isLoggedIn }) {
  return (
    <nav className={s.nav}>
      <ul className={isLoggedIn ? s.navList : s.navListForNotLoggedUser}>
        {isLoggedIn && (
          <li className={s.listItem}>
            <a href="/">Home</a>
          </li>
        )}
        {isLoggedIn && (
          <li className={s.listItem}>
            <a href="/">Materials</a>
          </li>
        )}
        <li className={s.listItem}>
          <a href="/">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
