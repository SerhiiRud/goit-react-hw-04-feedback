import PropTypes from 'prop-types';
import { ButtonSet, ButtonItem } from './FeedbackOtions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonSet>
        {Object.keys(options).map(option => (
          <li key={option}>
            <ButtonItem type="button" onClick={() => onLeaveFeedback(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </ButtonItem>
          </li>
        ))}
      </ButtonSet>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
