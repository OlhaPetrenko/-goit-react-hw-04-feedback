import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.itemText}>Good:</span>{' '}
          <span className={s.itemNum}>{good}</span>
        </li>

        <li className={s.item}>
          <span className={s.itemText}>Neutral:</span>{' '}
          <span className={s.itemNum}>{neutral}</span>
        </li>

        <li className={s.item}>
          <span className={s.itemText}>Bad:</span>{' '}
          <span className={s.itemNum}>{bad}</span>
        </li>
      </ul>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.itemText}>Total:</span>{' '}
          <span className={s.itemNum}>{total}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemText}> Positive feedback:</span>{' '}
          <span className={s.itemNum}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
