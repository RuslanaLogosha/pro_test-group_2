import React, { useState } from 'react';
import Burger from './Burger/Burger';
import s from './Header.module.css';
import Logo from './Logo';
import Modal from './Modal/Modal';
import Navigation from './Navigation/Navigation';
import SignOut from './SignOut/SignOut';
import UserInfo from './UserInfo/UserInfo';

function Header({ isLoggedIn }) {
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  };

  const handleSignOutBtnClick = () => {
    console.log('Sign Out!');
  };

  return (
    <header className={s.header}>
      <Logo />
      <div className={s.container}>
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn && <UserInfo userName="Vladymyr" />}
        <Burger isModalOpen={isModalOpen} onClick={handleModal} />
        {isLoggedIn && <SignOut onClick={handleSignOutBtnClick} />}
      </div>
      {isModalOpen && (
        <Modal onClick={handleSignOutBtnClick} isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
}

export default Header;