import React from 'react';
import PropTypes from 'prop-types';

const HomeCard = ({
  name, data,
}) => (
  <div>
    <h3>{name}</h3>
    <p>{Object.keys(data.rates).length}</p>
  </div>
);

HomeCard.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    rates: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
};

export default HomeCard;
