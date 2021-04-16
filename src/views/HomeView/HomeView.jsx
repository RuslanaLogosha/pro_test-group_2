import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

import HomePageButtons from '../../components/MainPage/Buttons/HomePageButtons';
import Container from '../../components/Container';
import s from './HomeView.module.css';
import { authActions } from 'redux/auth';

function HomeView() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.setUserLocation(location.pathname));

    // eslint-disable-next-line
  }, []);

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
