import PropTypes from 'prop-types';
import Container from '../../components/Container';
import TestResult from '../../components/TestResult';
import s from './ResultsView.module.css';

const ResultsView = ({ testType = 'Testing Theory' }) => {
  return (
    <Container>
      <div className={s.content}>
        <h1 className={s.mainTitle}>Results</h1>
        <h2 className={s.mainSubtitle}>[ {testType}_]</h2>

        <TestResult />

        <button className={s.btnRetry}>Try again</button>
      </div>
    </Container>
  );
};

ResultsView.propTypes = {
  testType: PropTypes.string.isRequired,
};

export default ResultsView;
