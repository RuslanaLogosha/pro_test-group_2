import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { testScoreOperations } from '../../../redux/testScore';
import { currentTestInfoSlice } from '../../../redux/testScore/test-reducers.js';
import arrow from '../../../images/arrow-main-page.svg';
import s from './HomePageButtons.module.css';

function Buttons() {
  const dispatch = useDispatch();

  const handleBtnTestClick = useCallback(
    (url, info) => {
      dispatch(testScoreOperations.getQuestions(url));
      dispatch(currentTestInfoSlice.actions.setInfo(info));
    },
    [dispatch],
  );

  return (
    <ul className={s.buttonContainer}>
      <li className={(s.buttonTech, s.button)}>
        <div className={s.buttonTech}>
          <Link
            to={{
              pathname: '/test',
              state: {
                quizName: 'QA technical training',
                url: 'techquiz/results',
              },
            }}
            className={s.buttonDescription}
            onClick={handleBtnTestClick('techquiz/questions', {
              quizName: 'QA technical training',
              url: 'techquiz/results',
            })}
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
            to={{
              pathname: '/test',
              state: {
                quizName: 'Theory Testing',
                url: 'theoryquiz/results',
              },
            }}
            className={s.buttonDescription}
            onClick={handleBtnTestClick('theoryquiz/questions', {
              quizName: 'Theory Testing',
              url: 'theoryquiz/results',
            })}
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
