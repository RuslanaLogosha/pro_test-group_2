import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import arrow from '../../images/arrow-main-page.svg';
import arrowBlack from '../../images/arrow-black.svg';
import actions from '../../redux/testScore/test-actions';
import s from './TestPage.module.css';

function TestPage(props) {
  const [index, setIndex] = useState(0);
  const test = useSelector(state => state.testScore.answersListForTest);
  const selected = useSelector(state => state.testScore.userAnswersOnTest);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (index !== 11) setIndex(index + 1);
  };

  const handlePrevPage = () => {
    if (index !== 0) setIndex(index - 1);
  };

  const isChecked = (id, answer) => {
    const question = selected?.find(el => el.questionId === id);
    return question?.result === answer;
  };

  const setAnswer = (result, questionId) => {
    dispatch(actions.setAnswer({ questionId, result }));
  };

  return (
    <section className={s.mainContainer}>
      <div className={s.wrapper}>
        <p className={s.testTitle}>[ {props.location.state.quizName}_ ]</p>
        <Link to="/" className={s.testFinish}>
          Finish test
        </Link>
      </div>

      <div className={s.questionForm}>
        <form>
          <p className={s.questionNumber}>
            Question <span className={s.questionNumberActive}>{index + 1}</span>{' '}
            / 12
          </p>
          <p className={s.question}>
            {test.length > 0 && test[index].question}
          </p>
          <div className={s.optionsWrapper}>
            {test.length > 0 &&
              test[index].answers.map(answer => {
                return (
                  <div className={s.optionBox} key={answer}>
                    <label className={s.optionLabel}>
                      <input
                        type="radio"
                        name="test"
                        className={s.originalCheckbox}
                        onChange={() =>
                          setAnswer(answer, test[index].questionId)
                        }
                      />

                      <span className={s.optionAnswer}>
                        <span className={s.checkbox}></span>
                        <span
                          className={
                            isChecked(test[index].questionId, answer)
                              ? s.checkboxAccent
                              : null
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
      <div className={s.buttonWrapper}>
        <button
          className={s.buttonPrevious}
          type="submit"
          onClick={handlePrevPage}
        >
          <img
            src={arrow}
            alt="arrow"
            width="24"
            height="16"
            className={s.arrowPrevious}
          />
          <span className={s.buttonPreviousName}>Previous question</span>
        </button>
        <button className={s.buttonNext} type="submit" onClick={handleNextPage}>
          <span className={s.buttonNextName}> Next question</span>
          <img src={arrowBlack} alt="arrow" width="24" height="16" />
        </button>
      </div>
    </section>
  );
}

export default TestPage;
