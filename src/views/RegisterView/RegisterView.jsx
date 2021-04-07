import { useDispatch } from 'react-redux';
import s from './RegisterView.module.css';
import Container from '../../components/Container';
import RegisterLoginForm from '../../components/RegisterLoginForm';
import { authOperations } from 'redux/auth';

const RegisterView = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (email, password, btnName) => {
        switch (btnName) {
            case 'signIn':
                return dispatch(authOperations.logIn({ email, password }));
            case 'signUp':
                return dispatch(authOperations.register({ email, password }));
            // !!! ЗДЕСЬ БУДЕТ GOOGLE !!!
            // case 'google':
            //     return dispatch(authOperations.googleAuth());
            default:
                return;
    }
    }

    return (
      <Container>
        <div className={s.wrap}>
            <div className={s.description}>
                <h1 className={s.title}>Pro Test</h1>
                <p className={s.text}><span className={s.textAccent}>[ </span>We will help you find weak points<br/>in knowledge so that you can strengthen it. We will show you what is relevant to know for a <span className={s.textAccent}>QA Engineer</span> and will try to make the learning process more diverse<span className={s.textAccent}>_ ]</span></p>
            </div>
            <RegisterLoginForm onSubmit={handleSubmitForm}/>
      </div>
    </Container>
  );
};

export default RegisterView;
