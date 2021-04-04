import Container from '../../components/Container';
import s from './RegisterView.module.css';
import RegisterLoginForm from '../../components/RegisterLoginForm';

const RegisterView = () => {
    return <Container>
        <div className={s.wrap}>
            <div className={s.description}>
                <h1 className={s.title}>Pro Test</h1>
                <p className={s.text}><span className={s.textAccent}>[ </span>Мы поможем найти слабые места в знаниях, чтобы вы смогли их усилить. Покажем что актуально знать для <span className={s.textAccent}>QA Engineer</span> и постараемся сделать процесс познания более разнообразным<span className={s.textAccent}>_ ]</span></p>
            </div>
            <RegisterLoginForm/>
        </div>
    </Container>
}

export default RegisterView;