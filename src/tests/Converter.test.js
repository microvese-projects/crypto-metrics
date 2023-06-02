import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Converter from '../components/Converter';

const mockStore = configureStore([]);

test('renders the Converter component with initial values', () => {
  const initialState = {
    displayed: {
      converted: {
        name: 'Currency Name',
        rate: 1.23,
      },
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Converter />
      </BrowserRouter>
    </Provider>,
  );

  // Test for the Navigation component
  const navigationElement = screen.getByText(/currency converter/i);
  expect(navigationElement).toBeInTheDocument();

  // Test for the value input
  const valueInput = screen.getByLabelText(/value to convert/i);
  expect(valueInput).toBeInTheDocument();
  expect(valueInput).toHaveValue(0);

  // Test for the rate input
  const rateInput = screen.getByLabelText(/going rate per dollar/i);
  expect(rateInput).toBeInTheDocument();
  expect(rateInput).toHaveValue(1.23);
  expect(rateInput).toBeDisabled();

  // Test for the converted value input
  const convertedInput = screen.getByLabelText(/your converted value in/i);
  expect(convertedInput).toBeInTheDocument();
  expect(convertedInput).toHaveValue(0);

  // Add more assertions for specific input elements if needed
});

test('updates the converted value when the value input changes', () => {
  const initialState = {
    displayed: {
      converted: {
        name: 'Currency Name',
        rate: 1.23,
      },
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Converter />
      </BrowserRouter>
    </Provider>,
  );

  const valueInput = screen.getByLabelText(/value to convert/i);
  const convertedInput = screen.getByLabelText(/your converted value in/i);

  // Simulate entering a value of 10 in the value input
  fireEvent.change(valueInput, { target: { value: '10' } });

  // The converted value should update accordingly
  expect(convertedInput).toHaveValue(12.3);

  // Simulate entering a value of 5 in the value input
  fireEvent.change(valueInput, { target: { value: '5' } });

  // The converted value should update accordingly
  expect(convertedInput).toHaveValue(6.15);

  // Add more assertions or test cases for different input values if needed
});
