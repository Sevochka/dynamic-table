import React, {FC, useState} from "react";
import {SearchBar} from "components/SearchBar/SearchBar";
import {Table} from "components/Table/Table";
import {InfoBox} from "components/InfoBox/InfoBox";
import {useFilteredData} from "hooks/useFilteredData";
import {Car, ResponseCars} from "types";
import "./content.scss";

type Props = ResponseCars & {};

const Content:FC<Props> = ({cars, tariffs_list}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const {items: carsFiltered} = useFilteredData(cars, searchText);

  const handleStartSearch = (text: string) => {
    setSearchText(text);
  }
  const handleOnSelect = (car: Car) => {
    setSelectedCar(car);
  }
  // Позволяет стирать данные о выбранной машине, если ее нет в списке
  const carsHasSelectedCar = carsFiltered.indexOf(selectedCar as Car) !== -1;
  if (selectedCar && !carsHasSelectedCar){
    setSelectedCar(null);
  }

  const infoBoxTitle = selectedCar
    ? `Выбран автомобиль ${selectedCar.mark} ${selectedCar.model}. Года выпуска: 
    ${Object.keys(selectedCar.tariffs).reduce((res, key, i, arr) =>
      `${res} ${key}: ${selectedCar.tariffs[key].year} года${arr.length-1 !== i ? ", " : "."}`, "")}`
    : `Выберите автомобиль`;

  return (
    <main className='content'>
      <SearchBar handleStartSearch={handleStartSearch} inputPlaceholder="Поиск" btnText="Найти"/>
      <div className="content__table-container">
        <Table
          cars={carsFiltered}
          tariffsList={tariffs_list}
          handleSelect={handleOnSelect}
        />
      </div>
      <InfoBox title={infoBoxTitle}/>
  </main>
  );
}

export {Content};