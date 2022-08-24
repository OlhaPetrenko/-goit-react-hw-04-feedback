import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

import s from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleClick(el) {
    console.log('el', el);

    switch (el) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  // console.log('countTotalFeedback', countTotalFeedback());

  function countPositivePercentage() {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  }
  // console.log('positivePercentage', countPositivePercentage());

  const total = countTotalFeedback();
  console.log('total', total);

  const positivePercentage = Number(countPositivePercentage().toFixed(2));
  console.log('positivePercentage', positivePercentage);
  // ?????? звідки в такому разі брати options
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div className={s.set}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />

        {/* <button onClick={handleClick}> Newclick</button> */}
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

// ==============================================================
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = feedbackName => {
//     this.setState(prevState => {
//       return {
//         [feedbackName]: prevState[feedbackName] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }
//   countPositivePercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return 0;
//     }
//     const positivePercentage = (good / total) * 100;
//     return positivePercentage;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { handleClick } = this;
//     const total = this.countTotalFeedback();

//     const positivePercentage = Number(
//       this.countPositivePercentage().toFixed(2)
//     );

//     const options = Object.keys(this.state);

//     return (
//       <div className={s.set}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
