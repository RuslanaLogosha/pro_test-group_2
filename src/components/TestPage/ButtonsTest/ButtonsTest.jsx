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

  return (
    <div className={s.buttonWrapper}>
      <button
        className={index === 0 ? s.disabledPrevBtn : s.buttonPrevious}
        type="submit"
        onClick={handlePrevPage}
      >
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
          className={s.arrowPrevious}
        >
          <path d="M23.8535 7.64643L16.3535 0.146435C16.1582 -0.0488931 15.8418 -0.0488931 15.6465 0.146435C15.4512 0.341763 15.4512 0.658169 15.6465 0.853451L22.293 7.49995H0.500016C0.223641 7.49995 0 7.72359 0 7.99997C0 8.27634 0.223641 8.49998 0.500016 8.49998H22.293L15.6465 15.1464C15.4512 15.3418 15.4512 15.6582 15.6465 15.8534C15.7441 15.9511 15.8721 15.9999 16 15.9999C16.128 15.9999 16.2559 15.9511 16.3536 15.8534L23.8536 8.35345C24.0488 8.15817 24.0488 7.84176 23.8535 7.64643Z" />
        </svg>

        <span className={s.buttonPreviousName}>Previous question</span>
      </button>
      {index < testList.length - 1 && (
        <button
          className={nextButtonDisabler()}
          type="submit"
          onClick={handleNextPage}
        >
          <span className={s.buttonNextName}> Next question</span>
          <svg
            className={s.arrowBlack}
            fill="black"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.8535 7.6465L16.3535 0.146496C16.1582 -0.048832 15.8418 -0.048832 15.6465 0.146496C15.4512 0.341824 15.4512 0.65823 15.6465 0.853512L22.293 7.50001L0.500016 7.50001C0.223641 7.50001 0 7.72365 0 8.00003C0 8.2764 0.223641 8.50004 0.500016 8.50004L22.293 8.50004L15.6465 15.1465C15.4512 15.3418 15.4512 15.6582 15.6465 15.8535C15.7441 15.9512 15.8721 16 16 16C16.128 16 16.2559 15.9512 16.3536 15.8535L23.8536 8.35351C24.0488 8.15823 24.0488 7.84182 23.8535 7.6465Z" />
          </svg>
        </button>
      )}
      {index === testList.length - 1 && (
        <Link
          className={s.buttonSubmit}
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
