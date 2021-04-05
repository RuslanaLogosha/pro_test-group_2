import React from 'react';
import cat from '../../images/result-page-cat.svg';
import Diagram from './Diagram';
import s from './TestResult.module.css';

export default function TestResult(results) {
  const {
    correctAnswers = 30,
    totalQuestions = 50,
    aboutResultTitle = 'Not bad!',
    aboutResultSubtitle = 'But you still need to learn some materials.',
  } = results;

  return (
    <div>
      <div className={s.resultBlock}>
        <h1 className={s.mainTitle}>Results</h1>
        <h2 className={s.mainSubtitle}>[ Testing Theory_]</h2>

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
        <h2 className={s.aboutResultTitle}>{aboutResultTitle}</h2>
        <h3 className={s.aboutResultSubtitle}>{aboutResultSubtitle}</h3>
        <button className={s.btnRetry}>Try again</button>
      </div>
    </div>
  );
}
