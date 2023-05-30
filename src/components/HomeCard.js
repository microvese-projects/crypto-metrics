import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { change } from '../Redux/Currencies/displayedSlice';

const HomeCard = ({
  name, data,
}) => {
  const dispatch = useDispatch();
  return (
    <Link to="details">
      <button
        type="button"
        className="homecard"
        onClick={() => dispatch(change({ data, name }))}
      >
        <h3>
          {name}
          {' '}
          currencies
        </h3>
        <p>
          {data.length}
          {' '}
          currencies
        </p>
      </button>
    </Link>
  );
};

HomeCard.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.string,
  })).isRequired,
};

export default HomeCard;
