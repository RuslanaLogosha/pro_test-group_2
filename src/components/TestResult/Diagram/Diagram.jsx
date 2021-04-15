import { PieChart } from 'react-minimal-pie-chart';
import s from './Diagram.module.css';
import AnimeSvg from 'components/Svg/AnimeSvg';

export default function Diagram({ values }) {
  const data = [
    { title: 'Incorrect', value: values.incorrectPercentage, color: '#D7D7D7' },
    { title: 'Correct', value: values.correctPercentage, color: '#FF6B09' },
  ];

  return (
    <>
      {values.totalAnswersCount > 0 && (
        <PieChart data={data} viewBoxSize={[100, 100]} />
      )}
      {!values.totalAnswersCount && <span>No data</span>}

      <div className={s.valuesBlock}>
        {values.correctPercentage > 0 && (
          <div className={s.correctBlock}>
            <div className={s.correctInnerBlock}>
              <AnimeSvg />
              <div className={s.correctColor}></div>
              <p className={s.correctPercentage}>{values.correctPercentage}%</p>
            </div>

            <p className={s.correctText}>Correct</p>
          </div>
        )}

        {values.incorrectPercentage > 0 && (
          <div className={s.incorrectBlock}>
            <div className={s.incorrectInnerBlock}>
              <AnimeSvg />
              <div className={s.incorrectColor}></div>
              <p className={s.incorrectPercentage}>
                {values.incorrectPercentage}%
              </p>
            </div>
            <p className={s.correctText}>Incorrect</p>
          </div>
        )}
      </div>
    </>
  );
}
