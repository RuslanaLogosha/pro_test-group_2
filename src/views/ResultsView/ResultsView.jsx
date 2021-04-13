import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import TestResult from '../../components/TestResult';
import { testScoreOperations } from '../../redux/testScore';
import { getTestInfo } from '../../redux/testScore/test-selectors.js';
import { currentTestInfoSlice } from '../../redux/testScore/test-reducers.js';
import s from './ResultsView.module.css';

const ResultsView = () => {
  const currentTestInfo = useSelector(getTestInfo);
  const dispatch = useDispatch();

  const handleRetryBtnClick = useCallback(
    (url, info) => {
      dispatch(testScoreOperations.getQuestions(url));
      dispatch(currentTestInfoSlice.actions.setInfo(info));
    },
    [dispatch],
  );

  return (
    <Container>
      <div className={s.content}>
        <h1 className={s.mainTitle}>Results</h1>
        <h2 className={s.mainSubtitle}>[ {currentTestInfo.quizName}_]</h2>

        <TestResult />

        <Link
          to={{
            pathname: '/test',
            state: {
              quizName: currentTestInfo.quizName,
              url: currentTestInfo.url,
            },
          }}
          className={s.btnRetry}
          onClick={() =>
            handleRetryBtnClick(currentTestInfo.url, {
              quizName: currentTestInfo.quizName,
              url: currentTestInfo.url,
            })
          }
        >
          Try again
        </Link>
      </div>
    </Container>
  );
};

ResultsView.propTypes = {
  currentTestInfo: PropTypes.objectOf(
    PropTypes.exact({
      quizName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default ResultsView;
