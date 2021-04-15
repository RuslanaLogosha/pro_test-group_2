import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { authActions } from 'redux/auth';
import s from './UsefulInfoView.module.css';

function UsefulInfoView() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.setUserLocation(location.pathname));

    // eslint-disable-next-line
  }, []);

  return (
    <main className={s.mainContainer}>
      <div className={s.quoteContainer}>
        <h2 className={s.title}>Useful literature</h2>
        <ul className={s.list}>
          <li>1. Testing dot.com Savin.</li>
          <li>2. A mental hospital in the hands of patients.</li>
          <li>3. Scrum. J. Sutherland.</li>
        </ul>
        <h2 className={s.title}>Useful resources</h2>
        <ul className={s.list}>
          <li>
            <a href="http://dou.ua" aria-label="сайт dou.ua" className={s.link}>
              1. dou.ua
            </a>
          </li>
          <li>
            <a
              href="https://habr.com/"
              aria-label="сайт Habr"
              className={s.link}
            >
              2. Habr
            </a>
          </li>
          <li>
            <a
              href="http://facebook.com/QA"
              aria-label="сайт facebook.com/QA"
              className={s.link}
            >
              3. facebook.com/QA
            </a>
          </li>
          <li>
            <a href="http://goit.ua" aria-label="goit.ua" className={s.link}>
              4. goit.ua
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default UsefulInfoView;
