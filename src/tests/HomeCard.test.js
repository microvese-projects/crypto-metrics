import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import { change } from '../Redux/Currencies/displayedSlice';
import store from '../Redux/Store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

test('renders the HomeCard component', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  const name = 'Test Name';
  const data = [
    { id: '1', name: 'Currency 1', rate: '1.2345' },
    { id: '2', name: 'Currency 2', rate: '2.3456' },
  ];

  render(
    <Provider store={store}>
      <Router>
        <HomeCard name={name} data={data} />
      </Router>
    </Provider>,
  );

  // Test button click event
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockDispatch).toHaveBeenCalledWith(change({ data, name }));

  // // Test link to "details" page
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/details');
});
