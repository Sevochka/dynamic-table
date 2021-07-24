import React from 'react';
import "./withLoading.scss";
/* eslint-disable  @typescript-eslint/no-explicit-any */
type HocProps = {
  isLoading: boolean;
  [propName: string]: any;
};

const WithLoading = (Component: React.FC<any>) => {
  const getLoadingContent = () => {
    const content = [];
    for (let i = 1; i <= 12; i++) {
      content.push(
        <div key={i} className={`sk-circle${i} sk-child`}/>
      );
    }
    return content;
  };

  return ({isLoading, ...props}: HocProps): JSX.Element => {
    return !isLoading ? (
      <Component {...props} />
    ) : (
      <div className="sk-circle">
        {getLoadingContent()}
      </div>
    );
  };
}
export default WithLoading;