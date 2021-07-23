import axios, { AxiosResponse } from 'axios';
import {ResponseCars} from 'types';

axios.defaults.baseURL = `https://city-mobil.ru/api`;

const getCarsData = async () => {
  const response: AxiosResponse<ResponseCars> = await axios.get('cars');
  return response.data;
};

export { getCarsData };