import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  const placeholder = 'Test Placeholder',
    searchText = 'Car',
    btnText = 'Найти';
  let executorSpy: jest.Mock;

  beforeEach(() => {
    executorSpy = jest.fn((value: string) => value);
    render(
      <SearchBar
        inputPlaceholder={placeholder}
        handleStartSearch={executorSpy}
        btnText={btnText}
      />
    );
  });

  test('expect input with placeholder to be in the document', () => {
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });
  test('expect search btn to be in the document', () => {
    const btnElement = screen.getByText(btnText);
    expect(btnElement).toBeInTheDocument();
  });
  test('should call executor function with searchText on btn-search click', () => {
    const btnElement = screen.getByText(btnText);
    const inputElement = screen.getByPlaceholderText(placeholder);
    userEvent.type(inputElement, searchText);
    userEvent.click(btnElement);
    expect(executorSpy).toBeCalledWith(searchText);
  });
});