import React from 'react';
import { render, screen } from '@testing-library/react';
import Store from './Store';

test('renders store title', () => {
  render(<Store />);
  const linkElement = screen.getByText(/store/i);
  expect(linkElement).toBeInTheDocument();
});
