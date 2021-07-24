import React, {FC} from 'react';
import { render, screen } from '@testing-library/react';
import withLoading from './withLoading';

describe('SearchBar', () => {
  const componentElementText = "Im dummy";
  const DummyComponent:FC<{text: string}>= ({text}) => <h1>{text}</h1>;
  const DummyComponentWithLoading = withLoading(DummyComponent);

  test('should not render text with isLoading = true', () => {
    render(
      <DummyComponentWithLoading
        text={componentElementText}
        isLoading={true}
      />
    )
    expect(() => screen.getByText(componentElementText)).toThrow();
  });
  test('should render loading element with isLoading = true', () => {
    render(
      <DummyComponentWithLoading
        text={componentElementText}
        isLoading={true}
      />
    )
    const loadingElement = document.getElementsByClassName('sk-circle')[0];
    screen.debug();
    expect(loadingElement).toBeInTheDocument();
  });
  test('should render text with isLoading = false', () => {
    render(
      <DummyComponentWithLoading
        text={componentElementText}
        isLoading={false}
      />
    )
    screen.debug();
    expect(screen.getByText(componentElementText)).toBeInTheDocument();
  });
  test('should not render loading element with isLoading = false', () => {
    render(
      <DummyComponentWithLoading
        text={componentElementText}
        isLoading={false}
      />
    )
    const loadingElement = document.getElementsByClassName('sk-circle')[0];
    expect(loadingElement).toBeUndefined();
  });
});