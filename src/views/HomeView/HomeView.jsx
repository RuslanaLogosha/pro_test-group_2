import HomePageButtons from '../../components/MainPage/Buttons/HomePageButtons';
import Container from '../../components/Container';
import s from './HomeView.module.css';

function HomeView() {
  return (
    <Container>
      <div className={s.quoteContainer}>
        <h2 className={s.quote}>
          “Regression testing. What is it? <br />
          If the system compiles, that's good, if it boots, that's great!”
        </h2>
      </div>
      <div className={s.nameContainer}>
        <h3 className={s.name}>Linus Torvalds</h3>
      </div>
      <p className={s.description}>Linux kernel creator, hacker, 1969</p>

      <HomePageButtons />
    </Container>
  );
}

export default HomeView;
