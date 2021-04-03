import React from 'react';
import s from './UserInfo.module.css';

function UserInfo({ userName }) {
  const firstLetter = userName[0];
  return (
    <div className={s.userInfoBox}>
      <span className={s.firstLetter}>{firstLetter}</span>
      <span className={s.userName}>{userName}</span>
    </div>
  );
}

export default UserInfo;
