import React from 'react';
import s from './SignOut.module.css';
import signOut from '../../../images/sign-out.svg';

function SignOut({ onClick }) {
  return (
    <div className={s.signOut} onClick={onClick}>
      <div className={s.signOutImgBox}>
        <img src={signOut} alt="signOutBtn" width="16" height="16"></img>
      </div>
    </div>
  );
}

export default SignOut;
