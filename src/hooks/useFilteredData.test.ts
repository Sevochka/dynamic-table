import {Car} from "types";
import {useFilteredData} from "hooks/useFilteredData";
import {renderHook} from "@testing-library/react-hooks";

describe('useFilteredData', () => {
  const cars: Car[] = [
    {
      "mark": "Acura",
      "model": "ILX",
      "tariffs": {
        "Комфорт": {
          "year": 3000
        },
        "Стандарт": {
          "year": 3001
        }
      }
    },
    {
      "mark": "One",
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
      "mark": "BMW",
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

  test('should return only first car', () => {
    const { result } = renderHook(() => useFilteredData(cars, 'Acura'))
    expect(JSON.stringify(result.current.items[0])).toEqual(JSON.stringify(cars[0]));
  });

  test('should return second and third cars', () => {
    const { result } = renderHook(() => useFilteredData(cars, "2015"))
    expect(JSON.stringify(result.current.items)).toEqual(JSON.stringify(cars.splice(1,3)));
  });
});