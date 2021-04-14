import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTestResults } from '../../redux/testScore/test-selectors.js';
import Diagram from './Diagram';
import cat from '../../images/result-page-cat.svg';
import s from './TestResult.module.css';

export default function TestResult() {
  const results = useSelector(getTestResults);

  return (
    <>
      <div className={s.resultBlock}>
        <div className={s.diagram}>
          <Diagram values={results} />
        </div>

        <div className={s.questionBlock}>
          <p className={s.correctAnswers}>
            Correct answers - <span>{results.correctAnswersCount}</span>
          </p>
          <p className={s.totalQuestions}>
            Total questions - <span>{results.totalAnswersCount}</span>
          </p>
        </div>
      </div>

      <div className={s.aboutResult}>
        <img src={cat} alt="cat" className={s.image} />
        <h3 className={s.aboutResultTitle}>{results.aboutResultTitle}</h3>
        <h4 className={s.aboutResultSubtitle}>{results.aboutResultSubtitle}</h4>
      </div>
    </>
  );
}

Diagram.propTypes = {
  results: PropTypes.objectOf(
    PropTypes.exact({
      testType: PropTypes.string.isRequired,
      totalAnswersCount: PropTypes.string.isRequired,
      correctAnswersCount: PropTypes.number.isRequired,
      correctPercentage: PropTypes.number.isRequired,
      incorrectPercentage: PropTypes.number.isRequired,
      aboutResultTitle: PropTypes.string.isRequired,
      aboutResultSubtitle: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
