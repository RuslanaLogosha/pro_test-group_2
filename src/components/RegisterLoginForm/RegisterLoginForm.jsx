import { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './RegisterLoginForm.module.css';
import { ReactComponent as GoogleIcon } from 'images/google-icon.svg';
import { authOperations } from 'redux/auth';

const RegisterLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    reset();
  }

  const handleSignIn = () => {
    dispatch(authOperations.logIn({ email, password }));
  }

  const handleSignUp = () => {
    dispatch(authOperations.register({ email, password }));
  }

  // !!! ЗДЕСЬ БУДЕТ GOOGLE !!!
  // const handleGoogleAuth = () => {
  //   dispatch(authOperations.googleAuth());
  // }

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className={s.wrap}
      autoComplete="off"
    >

    <p className={s.loginText}>You can use your Google Account to authorize:</p>

    <button
      type="submit"
      // onClick={handleGoogleAuth}
      className={s.googleBtn}
    >
      <GoogleIcon width="18" height="18" className={s.googleIcon} />
      <span className={s.googleBtnText}>Google</span>
    </button>

    <p className={s.loginText}>Or login to our app using e-mail and password:</p>

    <input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      placeholder="E-mail"
      className={s.inputEmail}
    />
      
    <input
      type="password"
      name="password"
      value={password}
      onChange={handleChange}
      placeholder="Password"
        className={s.inputPassword}
    />

    <div className={s.buttonsWrap}>
      <button type="submit" onClick={handleSignIn} className={s.btnLogin}>
        Sign in
      </button>
      <button type="submit" onClick={handleSignUp} className={s.btnRegister}>
          Sign up
      </button>
    </div>
  </form>
  )
}

export default RegisterLoginForm;

