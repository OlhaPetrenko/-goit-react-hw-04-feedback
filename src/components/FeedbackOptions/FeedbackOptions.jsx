import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
