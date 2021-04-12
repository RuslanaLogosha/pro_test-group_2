import PropTypes from 'prop-types';
import Container from '../../components/Container';
import TestResult from '../../components/TestResult';
import s from './ResultsView.module.css';

const ResultsView = ({ currentTestInfo = 'Testing Theory' }) => {
  return (
    <Container>
      <div className={s.content}>
        <h1 className={s.mainTitle}>Results</h1>
        <h2 className={s.mainSubtitle}>[ {currentTestInfo}_]</h2>

        <TestResult />

        <button className={s.btnRetry}>Try again</button>
      </div>
    </Container>
  );
};

ResultsView.propTypes = {
  currentTestInfo: PropTypes.string.isRequired,
};

export default ResultsView;
