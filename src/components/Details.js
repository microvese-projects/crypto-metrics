import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
// import { filter } from '../Redux/Currencies/displayedSlice';

const Details = () => {
  // const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState([]);

  const { arr, currencies } = useSelector((state) => state.displayed);
  const header = {};

  useEffect(() => {
    setDisplay(arr);
  }, [arr]);

  function handleChange(e) {
    const inpValue = e.target.value;
    setSearch(inpValue);

    const newArr = arr.filter(({
      id, name,
    }) => {
      // make same case
      const testid = id.toLowerCase();
      const testname = name.toLowerCase();
      const searched = search.toLowerCase();
      // filter
      if (testid.includes(searched) || testname.includes(searched)) {
        return true;
      }
      return false;
    });
    if (inpValue === '') {
      setDisplay(arr);
    } else {
      setDisplay(newArr);
    }
  }

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
      <div className="homeSubHeading">
        <h3>
          Stats for
          {' '}
          {header.name}
          {' '}
          Rates
        </h3>
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
            onChange={(e) => handleChange(e)}
          />
        </label>
      </form>
      <ul className="list">
        {display.map((cur) => (
          <li key={cur.id}>
            <p className="name">{cur.name}</p>
            <p className="rate">{cur.rate}</p>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
