import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureStore([]);

test('renders the Home component', () => {
  const initialState = {
    currencies: {
      isFetched: true,
      localRates: [
        { id: '1', name: 'Currency 1', rate: '1.234' },
        { id: '2', name: 'Currency 2', rate: '2.345' },
      ],
      loading: false,
    },
    rates: {
      dataFetched: true,
      globalRates: [
        { id: '3', name: 'Currency 3', rate: '3.456' },
        { id: '4', name: 'Currency 4', rate: '4.567' },
      ],
    },
  };

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );

  // Test navigation component
  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();

  // Test stats
  const statsHeading = screen.getByRole('heading', { level: 3, name: 'Currencies' });
  expect(statsHeading).toBeInTheDocument();

  const statsCount = screen.getByText('4');
  expect(statsCount).toBeInTheDocument();

  // Test home subheading
  const homeSubHeading = screen.getByRole('heading', { level: 3, name: 'Stats by Market' });
  expect(homeSubHeading).toBeInTheDocument();

  // Test home cards
  const localMarketCard = screen.getByText('Local Market currencies');
  expect(localMarketCard).toBeInTheDocument();

  const globalMarketCard = screen.getByText('Global Market currencies');
  expect(globalMarketCard).toBeInTheDocument();
});
