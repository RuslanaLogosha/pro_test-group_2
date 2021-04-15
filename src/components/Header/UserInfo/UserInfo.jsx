import React from 'react';
import s from './UserInfo.module.css';

function UserInfo({ userEmail }) {
  const firstLetter = userEmail[0];
  const firstPartOfEmail = userEmail.split('@')[0];
  return (
    <div className={s.userInfoBox}>
      <span className={s.firstLetter}>{firstLetter}</span>
      <span className={s.userEmail}>{firstPartOfEmail}</span>
    </div>
  );
}

export default UserInfo;
