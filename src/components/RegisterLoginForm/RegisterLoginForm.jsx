import s from './RegisterLoginForm.module.css';
import { ReactComponent as GoogleIcon } from '../../images/google-icon.svg';

const RegisterLoginForm = () => {
  return <form className={s.wrap} autoComplete="off">
    <p className={s.loginText}>Для авторизации можете использовать Google Account:</p>

    <button className={s.googleBtn}>
      <GoogleIcon width="18" height="18" className={s.googleIcon} />
      <span className={s.googleBtnText}>Google</span>
    </button>

    <p className={s.loginText}>Или войдите в приложение используя e-mail и пароль:</p>

    <input type="email" name="email" placeholder="E-mail" className={s.inputEmail} />
    <input type="password" name="password" placeholder="Password" className={s.inputPassword}/>

    <div className={s.buttonsWrap}>
      <button className={s.btnLogin}>Войти</button>
      <button className={s.btnRegister}>Регистрация</button>
    </div>
  </form>
}

export default RegisterLoginForm;

