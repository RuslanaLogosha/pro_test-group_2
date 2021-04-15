import React from 'react';
import { Link } from 'react-router-dom';

import s from './SignOut.module.css';
import signOut from '../../../images/sign-out.svg';

function SignOut({ onClick }) {
  return (
    <div className={s.signOut} onClick={onClick}>
      <div className={s.signOutImgBox}>
        <Link to="/register">
          <img src={signOut} alt="signOutBtn" width="16" height="16"></img>
        </Link>
      </div>
    </div>
  );
}

export default SignOut;
