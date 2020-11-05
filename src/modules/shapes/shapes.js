import PropTypes, { number, object } from 'prop-types';

export const contextShape = PropTypes.shape({
  children: PropTypes.arrayOf(object).isRequired,
});

export const productShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promo: PropTypes.arrayOf(number).isRequired,
});
