import PropTypes from 'prop-types';

import { Value, RatingType, Percent, Total } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <RatingType>
        Good: <Value>{good}</Value>
      </RatingType>
      <RatingType>
        Neutral: <Value>{neutral}</Value>
      </RatingType>
      <RatingType>
        Bad: <Value>{bad}</Value>
      </RatingType>
      <RatingType>
        Total: <Total>{total}</Total>
      </RatingType>
      <p>
        Positive feedback:{' '}
        <Percent type={positivePercentage}>{positivePercentage}%</Percent>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
