import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../Redux/Currencies/currenciesSlice';
import { fetchRates } from '../Redux/Currencies/currencyRatesSlice';
import HomeCard from './HomeCard';

const Home = () => {
  const dispatch = useDispatch();
  const { isFetched, localRates, loading } = useSelector((state) => state.currencies);
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, isFetched]);

  const { dataFetched, globalRates } = useSelector((state) => state.rates);

  useEffect(() => {
    if (!dataFetched) {
      dispatch(fetchRates());
    }
  }, [dispatch, dataFetched]);

  if (loading) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  return (
    <div>
      <HomeCard name="Local Market" data={localRates} />
      <HomeCard name="Global Market" data={globalRates} />
    </div>
  );
};

export default Home;
