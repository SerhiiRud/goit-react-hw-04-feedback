import styled from '@emotion/styled';

export const RatingType = styled.p`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Value = styled.span`
  dispaly: inline-block;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 4px;
  padding-left: 4px;
`;

export const Total = styled.span`
  dispaly: inline-block;
  background-color: #fff;
  order-radius: 4px;
  padding-right: 3px;
  padding-left: 3px;
  border: 1px solid black;
`;

export const Percent = styled.span`
  dispaly: inline-block;
  color: ${({ type }) => {
    if (type > 80) {
      return 'green';
    } else if (type <= 80 && type > 20) {
      return 'orange';
    } else {
      return 'red';
    }
  }};
`;
