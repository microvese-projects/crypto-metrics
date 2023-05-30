import React from 'react';
import PropTypes from 'prop-types';

const HomeCard = ({
  name, data,
}) => (
  <div className="homecard">
    <h3>{name}</h3>
    <p>{data.length}</p>
  </div>
);

HomeCard.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.string,
  })).isRequired,
};

export default HomeCard;
