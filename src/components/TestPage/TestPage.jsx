import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './TestPage.module.css';
import arrow from '../../images/arrow-main-page.svg';
import arrowBlack from '../../images/arrow-black.svg';
import actions from '../../redux/testScore/test-actions';
import { useDispatch, useSelector } from 'react-redux';

function TestPage(props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const test = useSelector(state => state.testScore.answersListForTest);

  const handleNextPage = () => {
    if (index === 11) {
      return;
    }
    setIndex(index + 1);
    setSelected(null);
  };

  const handlePrevPage = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
    setSelected(null);
  };

  const setAnswer = (e, id) => {
    dispatch(actions.setAnswer({ questionId: id, result: e.target.value }));
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
                        // onChange={handleCheck}
                        onClick={() => {
                          setSelected(answer);
                        }}
                        onChange={e => setAnswer(e, test[index].questionId)}
                      />

                      <span className={s.optionAnswer}>
                        <span className={s.checkbox}></span>
                        <span
                          className={
                            selected === answer ? s.checkboxAccent : null
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
