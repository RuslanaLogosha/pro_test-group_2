import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { testScoreOperations } from '../../../redux/testScore';
import { testPageIndexSlice } from '../../../redux/testScore/test-reducers.js';
import {
  getTestInfo,
  getTestPageIndex,
  getQuestionListForTest,
  getUserAnswersOnTest,
} from '../../../redux/testScore/test-selectors';
import s from './ButtonsTest.module.css';
import ArrowPreviousSvg from '../../Svg/ArrowPreviousSvg';
import ArrowNextSvg from '../../Svg/ArrowNextSvg';

function ButtonsTest() {
  const index = useSelector(getTestPageIndex);
  const testList = useSelector(getQuestionListForTest);
  const selected = useSelector(getUserAnswersOnTest);
  const { url } = useSelector(getTestInfo);
  const dispatch = useDispatch();

  const sendAnswers = useCallback(
    (selected, url) => {
      dispatch(testScoreOperations.sendAnswers({ selected, url }));
    },
    [dispatch],
  );

  const handleNextPage = useCallback(() => {
    if (index === testList.length - 1) return;
    dispatch(testPageIndexSlice.actions.setPlusTestPageIndex(1));
  }, [dispatch, index, testList.length]);

  const handlePrevPage = useCallback(() => {
    if (index === 0) return;
    dispatch(testPageIndexSlice.actions.setMinusTestPageIndex(1));
  }, [dispatch, index]);

  const nextButtonDisabler = () => {
    if (testList.length > 0) {
      return !selected?.find(el => el.questionId === testList[index].questionId)
        ? s.disabledNextBtn
        : s.buttonNext;
    } else {
      return s.buttonNext;
    }
  };

  const lastQuestionButtonDisabler = () => {
    return !selected?.find(el => el.questionId === testList[index].questionId)
      ? s.disabledSubmitBtn
      : s.buttonSubmit;
  };

  return (
    <div className={s.buttonWrapper}>
      <button
        className={index === 0 ? s.disabledPrevBtn : s.buttonPrevious}
        type="submit"
        onClick={handlePrevPage}
      >
        <ArrowPreviousSvg />

        <span className={s.buttonPreviousName}>Previous question</span>
      </button>

      {index < testList.length - 1 && (
        <button
          className={nextButtonDisabler()}
          type="submit"
          onClick={handleNextPage}
        >
          <span className={s.buttonNextName}> Next question</span>

          <ArrowNextSvg />
        </button>
      )}

      {index === testList.length - 1 && (
        <Link
          className={lastQuestionButtonDisabler()}
          to="/results"
          onClick={() => sendAnswers(selected, url)}
        >
          Submit my answers
        </Link>
      )}
    </div>
  );
}

export default ButtonsTest;
