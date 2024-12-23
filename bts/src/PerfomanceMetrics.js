import ProgressBar from 'react-bootstrap/ProgressBar';

function PerformanceMetrics() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default PerformanceMetrics;