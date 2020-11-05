import PropTypes, { object } from 'prop-types';

export const contextShape = PropTypes.shape({
  children: PropTypes.arrayOf(object).isRequired,
});
