import {useMemo} from "react";
import {Car} from "types";

const isObject = (obj: any) => {
  return obj === Object(obj);
}

/*
* Данный подход был выбран, так как
* 1) Универсальный
* 2) Позволяет производить поиск по нескольким полям одновременно, ук примеру по марке и модели
 */
const convertObjectFieldsToString = (car: Car): string => {
  return Object.keys(car).reduce((res, key) => {
    const field = car[key];
    if (isObject(field)){
       return `${res} ${convertObjectFieldsToString(field)}`;
    }
    else {
       return `${res} ${field}`;
    }
  }, "")
}

const useFilteredData = (items: any[], searchText: string) => {
  const filteredItems = useMemo(() => {
    return items.filter((el) => {
      return convertObjectFieldsToString(el).toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
  }, [items, searchText]);

  return { items: filteredItems};
}


export {useFilteredData}