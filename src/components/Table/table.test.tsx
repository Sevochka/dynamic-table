import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import userEvent from '@testing-library/user-event';
import {Car} from "types";

describe('Table', () => {
  const cars: Car[] = [
    {
      "mark": "Acura",
      "model": "ILX",
      "tariffs": {
        "Комфорт": {
          "year": 2015
        },
        "Стандарт": {
          "year": 2014
        }
      }
    },
    {
      "mark": "Acura",
      "model": "MDX",
      "tariffs": {
        "Комфорт": {
          "year": 2015
        },
        "Стандарт": {
          "year": 2014
        }
      }
    },
    {
      "mark": "Acura",
      "model": "TLX",
      "tariffs": {
        "Комфорт": {
          "year": 2015
        },
        "Стандарт": {
          "year": 2014
        }
      }
    },
  ];
  const tariffsList = ["Стандарт", "Комфорт", "Бизнес", "Комфорт+", "Эконом", "Минивен", "Лайт"];

  let executorSpy: jest.Mock;

  beforeEach(() => {
    executorSpy = jest.fn((value: Car) => value);
    render(
      <Table
       cars={cars}
       handleSelect={executorSpy}
       tariffsList={tariffsList}
      />
    );
  });

  test('should render all table headers', () => {
    tariffsList.forEach((tariff) => {
      const thElement = screen.getByText(tariff);
      expect(thElement).toBeInTheDocument();
    })
  });
  test('should render cars marks and model in one field', () => {
    cars.forEach(({mark, model}) => {
      const name = `${mark} ${model}`;
      expect(screen.getByText(name)).toBeInTheDocument();
    })
  });
  test('should call executor function with Car on click', () => {
    cars.forEach(Car => {
      const {mark, model} = Car;
      const name = `${mark} ${model}`;
      userEvent.click(screen.getByText(name));
      expect(executorSpy).toBeCalledWith(Car);
    })
  });
});