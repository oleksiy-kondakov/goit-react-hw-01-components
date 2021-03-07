import PropTypes from 'prop-types';
import styles from './StatList.module.css';
import Stat from '../Stat/Stat';

const generateItemColor = (min, max) => {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
};

const StatsList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li
        className={styles.item}
        style={{ backgroundColor: generateItemColor(0, 255) }}
        key={id}
      >
        <Stat label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatsList;