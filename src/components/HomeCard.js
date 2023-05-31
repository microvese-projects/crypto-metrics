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
        <div className="more">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>

        </div>
        <div className="cardContent">
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
        </div>
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
