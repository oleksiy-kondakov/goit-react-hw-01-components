import PropTypes from 'prop-types';
import styles from './Stat.module.css';

const Stat = ({ label, percentage }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stat;