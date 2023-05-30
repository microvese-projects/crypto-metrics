import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../Redux/Currencies/currenciesSlice';
import { fetchRates } from '../Redux/Currencies/currencyRatesSlice';
import HomeCard from './HomeCard';
import Navigation from './Navigation';

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
      <Navigation name="Markets" path="/" />
      <div className="stats">
        <h3>Currencies</h3>
        <p>{localRates.length + globalRates.length}</p>
      </div>
      <div className="homeSubHeading">
        <h3>Stats by Market</h3>
      </div>
      <div className="homeCardsContainer">
        <HomeCard name="Local Market" data={localRates} />
        <HomeCard name="Global Market" data={globalRates} />
      </div>
    </div>
  );
};

export default Home;
