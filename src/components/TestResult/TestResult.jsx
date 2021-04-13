import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { getTestResults } from '../../redux/testScore/test-selectors.js';
import Diagram from './Diagram';
import cat from '../../images/result-page-cat.svg';
import s from './TestResult.module.css';

export default function TestResult(results) {
  const {
    aboutResultTitle = 'Oops',
    aboutResultSubtitle = 'Something went wrong! Try to repeat.',
  } = results;

  const { correctAnswers = 0, totalQuestions = 0 } = useSelector(
    getTestResults,
  );

  return (
    <>
      <div className={s.resultBlock}>
        <div className={s.diagram}>
          <Diagram values={{ correctAnswers, totalQuestions }} />
        </div>

        <div className={s.questionBlock}>
          <p className={s.correctAnswers}>
            Correct answers - <span>{correctAnswers}</span>
          </p>
          <p className={s.totalQuestions}>
            Total questions - <span>{totalQuestions}</span>
          </p>
        </div>
      </div>

      <div className={s.aboutResult}>
        <img src={cat} alt="cat" className={s.image} />
        <h3 className={s.aboutResultTitle}>{aboutResultTitle}</h3>
        <h4 className={s.aboutResultSubtitle}>{aboutResultSubtitle}</h4>
      </div>
    </>
  );
}

// TestResult.propTypes = {
//   results: PropTypes.objectOf(
//     PropTypes.exact({
//       correctAnswers: PropTypes.number.isRequired,
//       totalQuestions: PropTypes.number.isRequired,
//       aboutResultTitle: PropTypes.string.isRequired,
//       aboutResultSubtitle: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };
