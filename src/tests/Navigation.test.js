import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders the Navigation component', () => {
  const name = 'Test Name';
  const path = '/test-path';

  render(
    <Router>
      <Navigation name={name} path={path} />
    </Router>,
  );

  // Test navigation elements
  const backButton = screen.getByRole('link');
  expect(backButton).toHaveAttribute('href', path);

  const title = screen.getByRole('heading', { level: 2, name });
  expect(title).toBeInTheDocument();
});
