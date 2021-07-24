type Tariff = {
  [key: string]: {
    year: number
  }
}
type Car = {
  mark: string,
  model: string,
  tariffs: Tariff;
}
type TariffsList = string[];

type ResponseCars = {
  cars: Car[],
  tariffs_list: string[];
}
export type {Tariff, Car, TariffsList, ResponseCars};