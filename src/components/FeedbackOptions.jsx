import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { option, onLiveFeedback } = props;
  return (
    <button name={option} onClick={onLiveFeedback}>
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  onLiveFeedback: PropTypes.func,
};

export default FeedbackOptions;
