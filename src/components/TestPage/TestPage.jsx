import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { userAnswersOnTestSlice } from '../../redux/testScore/test-reducers.js';
import {
  getTestPageIndex,
  getQuestionListForTest,
  getUserAnswersOnTest,
} from '../../redux/testScore/test-selectors';
import ButtonsTest from './ButtonsTest/ButtonsTest';
import s from './TestPage.module.css';

function TestPage() {
  const index = useSelector(getTestPageIndex);
  const testList = useSelector(getQuestionListForTest);
  const selected = useSelector(getUserAnswersOnTest);
  const dispatch = useDispatch();

  const isChecked = answer => {
    const question = selected?.find(el => {
      return el.questionId === testList[index].questionId;
    });
    return question?.answer === answer;
  };

  const setAnswer = useCallback(
    (answer, questionId) => {
      dispatch(
        userAnswersOnTestSlice.actions.setAnswer({ questionId, answer }),
      );
    },
    [dispatch],
  );

  return (
    <section className={s.mainContainer}>
      <div className={s.questionForm}>
        <form>
          <p className={s.questionNumber}>
            Question <span className={s.questionNumberActive}>{index + 1}</span>{' '}
            / 12
          </p>
          <p className={s.question}>
            {testList.length > 0 && testList[index].question}
          </p>
          <div className={s.optionsWrapper}>
            {testList.length > 0 &&
              testList[index].answers.map(answer => {
                return (
                  <div className={s.optionBox} key={nanoid()}>
                    <label className={s.optionLabel}>
                      <input
                        type="radio"
                        name="test"
                        className={s.originalCheckbox}
                        onChange={() =>
                          setAnswer(answer, testList[index].questionId)
                        }
                      />

                      <span className={s.optionAnswer}>
                        <span className={s.checkbox}></span>
                        <span
                          className={
                            isChecked(answer) ? s.checkboxAccent : null
                          }
                        ></span>
                        {answer}
                      </span>
                    </label>
                  </div>
                );
              })}
          </div>
        </form>
      </div>

      <ButtonsTest />
    </section>
  );
}

export default TestPage;
