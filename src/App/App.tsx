import React, {useEffect, useState} from 'react';
import {Header} from "components/Header/Header";
import {Content} from "components/Content/Content";
import {SideBar} from "components/SideBar/SideBar";
import {Footer} from "components/Footer/Footer";
import {getCarsData} from "api/api";
import withLoading from "hocs/withLoading";
import {ResponseCars} from "types";
import './app.scss';

const ContentWithLoading = withLoading(Content);
const App = () => {
  const [carsData, setCarsData] = useState<ResponseCars | null>(null);
  useEffect( () => {
    const getCarsFromApi = async () => {
      setCarsData(await getCarsData());
    }
    getCarsFromApi();
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="container">
        <SideBar/>
        <ContentWithLoading
          isLoading={!carsData?.cars}
          cars={carsData?.cars}
          tariffs_list={carsData?.tariffs_list}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
