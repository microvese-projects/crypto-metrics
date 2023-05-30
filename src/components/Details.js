import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

const Details = () => {
  const { arr, currencies } = useSelector((state) => state.displayed);

  const [search, setSearch] = useState('');
  const header = {};

  if (currencies === 'local') {
    header.name = 'Local Currencies';
    header.count = arr.length;
  } else {
    header.name = 'Global Currencies';
    header.count = arr.length;
  }

  return (
    <div>
      <Navigation name="Currency Rates" path="/" />

      <div className="stats">
        <h3>{header.name}</h3>
        <p>{header.count}</p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); }}
      >
        <label htmlFor="search">
          <span className="label">Search Currency</span>
          <input
            type="text"
            id="search"
            value={search}
            placeholder={`${currencies === 'local'
              ? 'Search Local Currencies'
              : 'Search Global Currencies'}`}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
      <ul className="list">
        {arr.map((cur) => (
          <li key={cur.id}>
            <p className="name">{cur.name}</p>
            <p className="rate">{cur.rate}</p>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
