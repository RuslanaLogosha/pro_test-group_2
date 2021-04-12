import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './RegisterLoginForm.module.css';
import { ReactComponent as GoogleIcon } from 'images/google-icon.svg';

const RegisterLoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const btnName = e.currentTarget.name;
    const isbtnGoogle = btnName === "google";

    if (!isbtnGoogle && (email.trim() === '' || password.trim() === '')) {
      return toast.error('❌ Please, enter fields');
    }

    onSubmit(email, password, btnName);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.wrap} autoComplete="off">
      <p className={s.loginText2}>
        You can use your Google Account to authorize:
      </p>

    <button
      type="submit"
      name="google"
      onClick={handleSubmit}
      className={s.googleBtn}
    >
      <GoogleIcon width="18" height="18" className={s.googleIcon} />
      <span className={s.googleBtnText}>Google</span>
    </button>

      <p className={s.loginText}>
        Or login to our app using e-mail and password:
      </p>


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
      <button
        type="submit"
        name="signIn"
        onClick={handleSubmit}
        className={s.btnLogin}
      >
        Sign in
      </button>
      <button
        type="submit"
        name="signUp"
        onClick={handleSubmit}
        className={s.btn}
      >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterLoginForm;
