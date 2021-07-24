import {Car} from "types";
import {useSortableData} from "hooks/useSortableData";
import {act, renderHook} from "@testing-library/react-hooks";

describe('useSortableData', () => {
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
          "year": 2016
        },
        "Стандарт": {
          "year": 2014
        }
      }
    },
  ];

  test('should sort by Комфорт correctly', () => {
    const { result } = renderHook(() => useSortableData(cars))
    act(() => {
      result.current.startSort("Комфорт");
    });
    const array = [cars[1], cars[2], cars[0]];
    expect(JSON.stringify(result.current.items)).toEqual(JSON.stringify(array));
  });

  test('should sort by mark and model', () => {
    const { result } = renderHook(() => useSortableData(cars))
    act(() => {
      result.current.startSort(['mark', 'model']);
    });
    const array = [cars[0], cars[2], cars[1]];
    expect(JSON.stringify(result.current.items)).toEqual(JSON.stringify(array));
  });

  test('should change direction of sort', () => {
    const { result } = renderHook(() => useSortableData(cars))
    act(() => {
      result.current.startSort(['mark', 'model']);
    });
    act(() => {
      result.current.startSort(['mark', 'model']);
    });
    const array = [cars[1], cars[2], cars[0]];
    expect(JSON.stringify(result.current.items)).toEqual(JSON.stringify(array));
  });
});