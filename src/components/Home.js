import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../Redux/Currencies/currenciesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { isFetched } = useSelector((state) => state.currencies);
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, isFetched]);
  return (
    <div>Home</div>
  );
};

export default Home;
