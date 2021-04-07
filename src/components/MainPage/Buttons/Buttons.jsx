import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { testScoreOperations } from '../../../redux/testScore';

import s from './Buttons.module.css';
import arrow from '../../../images/arrow-main-page.svg';

function Buttons() {
  const dispatch = useDispatch();

  const getAnswers = useCallback(
    url => dispatch(testScoreOperations.getAnswers(url)),
    [dispatch],
  );

  return (
    <ul className={s.buttonContainer}>
      <li className={(s.buttonTech, s.button)}>
        <div className={s.buttonTech}>
          <Link
            to={{
              pathname: '/test',
              state: { quizName: 'QA technical training' },
            }}
            className={s.buttonDescription}
            onClick={() => getAnswers('techquiz/questions')}
          >
            QA technical <br />
            training
            <img
              src={arrow}
              alt="arrow"
              width="24"
              height="16"
              className={s.arrow}
            />
          </Link>
        </div>
      </li>
      <li className={s.button}>
        <div className={s.buttonTheory}>
          <Link
            to={{ pathname: '/test', state: { quizName: 'Theory Testing' } }}
            className={s.buttonDescription}
            onClick={() => getAnswers('theoryquiz/questions')}
          >
            Testing <br />
            theory
            <img
              src={arrow}
              alt="arrow"
              width="24"
              height="16"
              className={s.arrow}
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default Buttons;
