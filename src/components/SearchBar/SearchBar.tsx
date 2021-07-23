import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import "./searchBar.scss";

type Props = {
  handleStartSearch: (searchText: string) => void;
  inputPlaceholder: string;
  btnText: string;
};

const SearchBar: FC<Props> = ({ handleStartSearch, inputPlaceholder, btnText }) => {
  const [searchText, setSearchText] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };
  const startSearch = () => {
    handleStartSearch(searchText);
  };
  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      startSearch();
    }
  };
  return (
    <div className="search-bar">
      <div className="search-bar__search">
        <span className="search-bar__icon"/>
        <input
          type="text"
          placeholder={inputPlaceholder}
          aria-label={inputPlaceholder}
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyDown}
        />
      </div>
      <button className="search-bar__btn-search" type="button" onClick={startSearch}>
        {btnText}
      </button>
    </div>
  );
};

export { SearchBar };