import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={s.link}
      activeClassName={s.activeLink}
      // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      className={s.link}
      activeClassName={s.activeLink}
      // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      PhoneBook
    </NavLink>
  </nav>
);

export default Navigation;
