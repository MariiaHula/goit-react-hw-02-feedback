import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'styles/Styles';

const FeedbackOptions = ({ option, onLiveFeedback }) => {
  return (
    <Button name={option} onClick={onLiveFeedback}>
      {option}
    </Button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  onLiveFeedback: PropTypes.func,
};

export default FeedbackOptions;
