// import { useState } from 'react';
import { useReducer } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

import s from './App.module.css';

// =============================    feedback with useReducer
const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function reducer(state, action) {
  const { type, peyload } = action;
  switch (type) {
    case 'good':
      return { ...state, good: peyload + 1 };

    case 'neutral':
      return { ...state, neutral: peyload + 1 };

    case 'bad':
      return { ...state, bad: peyload + 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { good, neutral, bad } = state;

  function handleClick(feedbackName) {
    dispatch({ type: feedbackName, peyload: state[feedbackName] });
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositivePercentage() {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  }

  const total = countTotalFeedback();
  const positivePercentage = Number(countPositivePercentage().toFixed(2));
  const options = Object.keys(initialState);

  return (
    <div className={s.set}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;

// =============================    feedback with useState

// function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   function handleClick(el) {
//     switch (el) {
//       case 'Good':
//         setGood(good + 1);
//         break;
//       case 'Neutral':
//         setNeutral(neutral + 1);
//         break;
//       case 'Bad':
//         setBad(bad + 1);
//         break;
//       default:
//         return;
//     }
//   }

//   function countTotalFeedback() {
//     return good + neutral + bad;
//   }

//   function countPositivePercentage() {
//     const total = countTotalFeedback();
//     if (!total) {
//       return 0;
//     }
//     const positivePercentage = (good / total) * 100;
//     return positivePercentage;
//   }

//   const total = countTotalFeedback();

//   const positivePercentage = Number(countPositivePercentage().toFixed(2));

//   const options = ['Good', 'Neutral', 'Bad'];

//   return (
//     <div className={s.set}>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
//       </Section>

//       <Section title="Statistics">
//         {total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// }

// export default App;
