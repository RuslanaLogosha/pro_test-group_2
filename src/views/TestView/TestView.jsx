import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TestPage from '../../components/TestPage/TestPage';
import Container from '../../components/Container';
import { getTestInfo } from '../../redux/testScore/test-selectors';
import s from './TestView.module.css';

function TestView() {
  const testName = useSelector(getTestInfo).quizName;

  return (
    <Container>
      <div className={s.wrapper}>
        <p className={s.testTitle}>[ {testName}_ ]</p>
        <Link to="/" className={s.testFinish}>
          Finish test
        </Link>
      </div>
      <TestPage />
    </Container>
  );
}

export default TestView;
