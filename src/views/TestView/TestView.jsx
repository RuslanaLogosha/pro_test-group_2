import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import TestPage from '../../components/TestPage/TestPage';
import Container from '../../components/Container';
import { getTestInfo } from '../../redux/testScore/test-selectors';
import s from './TestView.module.css';

const MyTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'var(--inputBorderColor)',
    color: 'var(--black)',
    fontSize: 11,
    fontFamily: 'var(--mainFont)',
  },
  tooltipArrow: {
    margin: '0.5em',
  },
  arrow: {
    color: 'var(--inputBorderColor)',
  },
}))(Tooltip);

function TestView() {
  const testName = useSelector(getTestInfo).quizName;

  return (
    <Container>
      <div className={s.wrapper}>
        <p className={s.testTitle}>[ {testName}_ ]</p>
        <MyTooltip title="Return to Home page" TransitionProps={{ timeout: 600 }} placement={'top-end'} arrow>
          <Link to="/" className={s.testFinish}>
            Finish test
          </Link>
        </MyTooltip>
      </div>
      <TestPage />
    </Container>
  );
}

export default TestView;
