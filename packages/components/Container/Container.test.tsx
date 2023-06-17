import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Container>Test Content</Container>);

    // Check if the child content is in the document
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
