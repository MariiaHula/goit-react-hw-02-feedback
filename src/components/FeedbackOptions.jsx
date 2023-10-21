import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, onLiveFeedback }) => {
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
