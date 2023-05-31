import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Details from '../components/Details';

const mockStore = configureStore([]);

test('renders the Details component with local currencies', () => {
  const initialState = {
    displayed: {
      arr: [
        { id: 1, name: 'LocalCurrency 1', rate: 1.23 },
        { id: 2, name: 'LocalCurrency 2', rate: 4.56 },
      ],
      currencies: 'local',
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );

  // Test for the Navigation component
  const navigationElement = screen.getByText(/currency rates/i);
  expect(navigationElement).toBeInTheDocument();

  // Test for the header
  const headerElement = screen.getByText('Local Currencies');
  expect(headerElement).toBeInTheDocument();

  // Test for the currency count
  const countElement = screen.getByText('2');
  expect(countElement).toBeInTheDocument();

  // Test for the search input
  const searchInput = screen.getByLabelText(/search currency/i);
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveValue('');

  // Test for the list of currencies
  const currencyElements = screen.getAllByText(/localcurrency/i);
  expect(currencyElements).toHaveLength(2);

  // Test for the searchbox
  const searchBox = screen.getByRole('textbox');
  expect(searchBox).toBeInTheDocument();
});

test('renders the Details component with global currencies', () => {
  const initialState = {
    displayed: {
      arr: [
        { id: 1, name: 'GlobalCurrency 3', rate: 7.89 },
        { id: 2, name: 'GlobalCurrency 4', rate: 0.12 },
      ],
      currencies: 'global',
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );

  // Test for the header
  const headerElement = screen.getByText(/currency rates/i);
  expect(headerElement).toBeInTheDocument();

  // Test for the currency count
  const countElement = screen.getByText('2');
  expect(countElement).toBeInTheDocument();

  // Test for the search input
  const searchInput = screen.getByLabelText(/search currency/i);
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveValue('');

  // Test for the list of currencies
  const currencyElements = screen.getAllByText(/globalcurrency/i);
  expect(currencyElements).toHaveLength(2);

  // Test for the searchbox
  const searchBox = screen.getByRole('textbox');
  expect(searchBox).toBeInTheDocument();
});
