import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element', () => {
  render(<App />);
  const headerElement = screen.getByText(/counter/i);
  expect(headerElement).toBeInTheDocument();
  
  // const buttonElement = screen.getByText(/click me/i);
  // expect(buttonElement).toBeInTheDocument();
});
