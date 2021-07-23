import {FC} from "react";
import {useSortableData} from "hooks/useSortableData";
import {Car, TariffsList} from "types";
import "./table.scss";

type Props = {
  tariffsList: TariffsList,
  cars: Car[];
  handleSelect: (car: Car) => void;
}
const Table:FC<Props> = ({tariffsList, cars, handleSelect}) => {
  const { items, startSort, sortConfig } = useSortableData(cars);

  const getClassName = (name:string | string[]) => {
    if (!sortConfig) return;
    if (Array.isArray(name) && Array.isArray(sortConfig.key)) {
      return sortConfig.direction;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className="table-cars">
      <thead>
        <tr>
          <th>
            <button type="button"
                    className={getClassName(['mark', 'model'])}
                    onClick={() => startSort(['mark', 'model'])}>
              Марка и модель
            </button>
          </th>
          {tariffsList.map((el) => {
            return <th key={el}>
                <button type="button"
                        onClick={() => startSort(el)}
                        className={getClassName(el)}>
                  {el}
                </button>
              </th>
          })}
        </tr>
      </thead>
      <tbody>
        {items.map(car => {
          const {tariffs, model, mark} = car;
          const key = `${mark}-${model}}`
            return (
              <tr key={key} onClick={() => handleSelect(car)}>
                <td>{`${mark} ${model}`}</td>
                {tariffsList.map((el) => {
                  const key = `${mark}-${model}-${el}`
                  return <td key={key}>{tariffs.hasOwnProperty(el) ? tariffs[el].year : '—'}</td>
                })}
              </tr>
            )
          }
        )}
      </tbody>
  </table>
  )
}

export {Table};
