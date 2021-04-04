import React from 'react';
import s from './Buttons.module.css';
import arrow from '../../../images/arrow-main-page.svg';

function Buttons() {
  return (
    <ul className={s.buttonContainer}>
      <li className={(s.buttonTech, s.button)}>
        <div className={s.buttonTech}>
          {/*здесь будет Link*/}
          <a href="/" className={s.buttonDescription}>
            QA technical <br />
            training
            <img
              src={arrow}
              alt="arrow"
              width="24"
              height="16"
              className={s.arrow}
            />
          </a>
        </div>
      </li>
      <li className={s.button}>
        <div className={s.buttonTheory}>
          {/*здесь будет Link*/}
          <a href="/" className={s.buttonDescription}>
            Testing <br />
            theory
            <img
              src={arrow}
              alt="arrow"
              width="24"
              height="16"
              className={s.arrow}
            />
          </a>
        </div>
      </li>
    </ul>
  );
}

export default Buttons;
