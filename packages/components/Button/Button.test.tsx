import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders correctly and can be clicked', () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button onClick={handleClick}>Test Button</Button>);
  
  // Check if button is in the document
  expect(getByText('Test Button')).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(getByText('Test Button'));

  // Check if onClick was called
  expect(handleClick).toHaveBeenCalled();
});
