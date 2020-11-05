import PropTypes from 'prop-types';

export const contextShape = PropTypes.shape({
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});
