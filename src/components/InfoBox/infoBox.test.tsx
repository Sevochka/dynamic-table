import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoBox } from './InfoBox';

describe('SearchBar', () => {
  const title = 'This is a test';

  beforeEach(() => {
    render(
      <InfoBox
       title={title}
      />
    );
  });

  test('should render an element with given title', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});