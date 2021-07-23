import React from 'react';
import "./withLoading.scss";
/* eslint-disable  @typescript-eslint/no-explicit-any */
type HocProps = {
  isLoading: boolean;
  [propName: string]: any;
};

const WithLoading = (Component: React.FC<any>) =>
  function WihLoadingComponent({ isLoading, ...props }: HocProps): JSX.Element {
    return !isLoading ? (
      <Component {...props} />
    ) : (
      <div className="sk-circle">
        <div className="sk-circle1 sk-child"/>
        <div className="sk-circle2 sk-child"/>
        <div className="sk-circle3 sk-child"/>
        <div className="sk-circle4 sk-child"/>
        <div className="sk-circle5 sk-child"/>
        <div className="sk-circle6 sk-child"/>
        <div className="sk-circle7 sk-child"/>
        <div className="sk-circle8 sk-child"/>
        <div className="sk-circle9 sk-child"/>
        <div className="sk-circle10 sk-child"/>
        <div className="sk-circle11 sk-child"/>
        <div className="sk-circle12 sk-child"/>
      </div>
    );
  };

export default WithLoading;