import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation({ isLoggedIn }) {
  return (
    <nav className={s.nav}>
      <ul className={isLoggedIn ? s.navList : s.navListForNotLoggedUser}>
        {isLoggedIn && (
          <li className={s.listItem}>
            <NavLink
              to="/"
              activeClassName={s.activeLink}
              className={s.link}
              exact={true}
            >
              Home
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className={s.listItem}>
            <NavLink
              to="/materials"
              activeClassName={s.activeLink}
              className={s.link}
            >
              Materials
            </NavLink>
          </li>
        )}
        <li className={s.listItem}>
          <NavLink
            to="/contacts"
            activeClassName={s.activeLink}
            className={s.link}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
