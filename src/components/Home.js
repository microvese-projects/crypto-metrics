import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../Redux/Currencies/currenciesSlice';
import { fetchRates } from '../Redux/Currencies/currencyRatesSlice';
import HomeCard from './HomeCard';

const Home = () => {
  const dispatch = useDispatch();
  const { isFetched, Data } = useSelector((state) => state.currencies);
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, isFetched]);

  const { dataFetched } = useSelector((state) => state.rates);

  useEffect(() => {
    if (!dataFetched) {
      dispatch(fetchRates());
    }
  }, [dispatch, dataFetched]);

  return (
    <div>
      Home page
      <HomeCard name="Crypto" data={Data} />
    </div>
  );
};

export default Home;
