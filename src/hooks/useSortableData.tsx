import {useMemo, useState} from "react";

type SortConfig = null | {
  key: string | string[],
  direction: string;
}

enum OrderType {
  asc = "ascending",
  des = "descending"
}

const useSortableData = (items: any[], config: SortConfig = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aKey: string|number = "";
        let bKey: string|number = "";
        if (Array.isArray(sortConfig.key)){
          sortConfig.key.forEach((el) => {
            aKey += a[el];
            bKey += b[el];
          });
        }
        else {
          aKey = a.tariffs.hasOwnProperty(sortConfig.key) ? a.tariffs[sortConfig.key].year : 0;
          bKey = b.tariffs.hasOwnProperty(sortConfig.key) ? b.tariffs[sortConfig.key].year : 0;
        }
        if (aKey < bKey) {
          return sortConfig.direction === OrderType.asc ? -1 : 1;
        }
        if (aKey > bKey) {
          return sortConfig.direction === OrderType.asc ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const startSort = (key: string | string[]) => {
    let direction = OrderType.asc;

    if (
      sortConfig
      && sortConfig.key === key
      && sortConfig.direction === OrderType.asc) {
      direction = OrderType.des;
    } else if(
      sortConfig
      && Array.isArray(key)
      && Array.isArray(sortConfig.key)
      && sortConfig.key.join('') === key.join('')
      && sortConfig.direction === OrderType.asc
    ){
      direction = OrderType.des;
    }

    setSortConfig({ key: key, direction });
  }

  return { items: sortedItems, startSort, sortConfig };
}

export {useSortableData}