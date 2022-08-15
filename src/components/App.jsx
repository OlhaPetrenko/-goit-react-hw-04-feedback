import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = feedbackName => {
    this.setState(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const PositiveFeedbackPercentage = (good / total) * 100;
    return PositiveFeedbackPercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { handleClick } = this;
    const total = this.countTotalFeedback();

    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={() => handleClick('good')}>
            Good
          </button>
          <button type="button" onClick={() => handleClick('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => handleClick('bad')}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics </h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {Number(positiveFeedback.toFixed(2))}%</li>
          </ul>
        </div>
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101',
//     // }}
//     >
//       <Feedback />
//     </div>
//   );
// };

export default App;
