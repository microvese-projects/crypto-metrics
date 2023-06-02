import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

function Converter() {
  const [value, setValue] = useState(0);
  const { converted } = useSelector((state) => state.displayed);

  const newVal = useMemo(() => value * converted.rate, [value, converted.rate]);

  return (
    <div className="converter">
      <Navigation name="Currency Converter" path="/details" />
      <form
        className="conversionForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="value">
          Value to convert:
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <label htmlFor="rate">
          Going rate per dollar:
          <input
            type="number"
            id="rate"
            value={converted.rate}
            disabled
          />
        </label>
        <label htmlFor="converted">
          Your converted value in
          {' '}
          {converted.name}
          :
          <input
            type="number"
            id="converted"
            value={newVal}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default Converter;
