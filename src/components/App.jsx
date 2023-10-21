import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeButton = e => {
    switch (e.target.name) {
      case 'good':
        this.setState(prevState => ({ good: +prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: +prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: +prevState.bad + 1 }));
        break;

      default:
        break;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const feedback = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          {options.map(option => (
            <FeedbackOptions
              key={crypto.randomUUID()}
              option={option}
              onLiveFeedback={this.handleChangeButton}
            />
          ))}
        </Section>
        <Section title="Statistics">
          {feedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedback}
              positivePercentage={positive}
            />
          )}
        </Section>
      </>
    );
  }
}
