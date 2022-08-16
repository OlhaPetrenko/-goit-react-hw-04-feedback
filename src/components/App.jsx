import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

import s from './App.module.css';

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
  countPositivePercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { handleClick } = this;
    const total = this.countTotalFeedback();

    const positivePercentage = Number(
      this.countPositivePercentage().toFixed(2)
    );

    return (
      <div className={s.set}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick}
          />
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
}

export default App;
