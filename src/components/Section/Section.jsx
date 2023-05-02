import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionEl title="">{children}</SectionEl>;
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
};
