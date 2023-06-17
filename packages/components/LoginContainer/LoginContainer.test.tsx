import React from 'react';
import { render } from '@testing-library/react';
import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<LoginContainer>Test Content</LoginContainer>);

    // Check if the child content is in the document
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
