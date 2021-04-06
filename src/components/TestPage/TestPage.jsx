import React from 'react';
import { Link } from 'react-router-dom';
import s from './TestPage.module.css';
import arrow from '../../images/arrow-main-page.svg';
import arrowBlack from '../../images/arrow-black.svg';

function TestPage({ testName }) {
  //   handleOptionChange = e => {
  //     e.preventDefault();
  //     console.log('clicked');
  //   };
  return (
    <section className={s.mainContainer}>
      <div className={s.wrapper}>
        <p className={s.testTitle}>[Testing theory_]</p>
        <Link to="/" className={s.testFinish}>
          Finish test
        </Link>
      </div>

      <div className={s.questionForm}>
        <form>
          <p className={s.questionNumber}>
            Question <span className={s.questionNumberActive}>1</span> / 12
          </p>
          <p className={s.question}>What is regression testing?</p>

          <div className={s.optionsWrapper}>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-1"
              />
              <label htmlFor="id-1" className={s.optionLabel}>
                This is testing of the main functionality of the application
              </label>
            </div>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-2"
              />
              <label htmlFor="id-2" className={s.optionLabel}>
                Testing a single function
              </label>
            </div>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-3"
              />
              <label htmlFor="id-3" className={s.optionLabel}>
                Testing a single function
              </label>
            </div>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-4"
              />
              <label htmlFor="id-4" className={s.optionLabel}>
                Tests on already tested areas of the application
              </label>
            </div>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-5"
              />
              <label htmlFor="id-5" className={s.optionLabel}>
                One of the types of testing aimed at checking the conformity of
                the functional requirements of the software to its real
                characteristics
              </label>
            </div>
            <div className={s.optionBox}>
              <input
                type="radio"
                name="test"
                value="answer"
                className={s.optionInput}
                id="id-6"
              />
              <label htmlFor="id-6" className={s.optionLabel}>
                I don’t know
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.buttonPrevious}>
          <img
            src={arrow}
            alt="arrow"
            width="24"
            height="16"
            className={s.arrowPrevious}
          />
          <span className={s.buttonPreviousName}> Previous question</span>
        </button>
        <button className={s.buttonNext}>
          <span className={s.buttonNextName}> Next question</span>
          <img src={arrowBlack} alt="arrow" width="24" height="16" />
        </button>
      </div>
    </section>
  );
}

export default TestPage;
