import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const battonGroup = options.map(el => (
    <button className={s.btn} type="button" onClick={() => onLeaveFeedback(el)}>
      {el}
    </button>
  ));
  return <>{battonGroup}</>;
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
