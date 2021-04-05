import React from 'react';
import cat from '../../images/result-page-cat.svg';
import s from './TestResult.module.css';

export default function TestResult() {
  return (
    <div>
      <div className={s.resultBlock}>
        <h1 className={s.mainTitle}>Результаты</h1>
        <h2 className={s.mainSubtitle}>[ Теория Тестирования_]</h2>
        <div className={s.diagram}>should be diagram here</div>
        <div className={s.questionBlock}>
          <p className={s.correctAnswers}>
            Верных ответов - <span>9</span>
          </p>
          <p className={s.totalQuestions}>
            Всего вопросов - <span>12</span>
          </p>
        </div>
      </div>

      <div className={s.aboutResult}>
        <img src={cat} alt="cat" className={s.image} />
        <h2 className={s.aboutResultTitle}>Неплохой результат!</h2>
        <h3 className={s.aboutResultSubtitle}>
          Но тебе еще нужно доучить материалы.
        </h3>
        <button className={s.btnRetry}>Пройти еще раз</button>
      </div>
    </div>
  );
}
