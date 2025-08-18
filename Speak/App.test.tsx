import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';

test('renders the app correctly', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Open up App.tsx to start working on your app!/i);
  expect(welcomeText).toBeTruthy();
});