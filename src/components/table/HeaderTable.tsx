import React, { ReactNode } from 'react';
import './HeaderTable.css';
import { Add, AddCircle, Search } from '@mui/icons-material';
import { Button } from '@mui/material';

interface Props {
  title: string;
  button: ReactNode;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const HeaderTable: React.FC<Props> = ({ title, button, onSearch, onButtonClick }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event);
  };

  return (
    <div className="custom-header">
      <div className="custom-header-actions">
        <h1 className="custom-header-title ht-left">{title}</h1>
        <div className="ht-right">
          <div className="th-search">
            <input type="text" placeholder="Search..." value={searchValue} onChange={handleSearchChange} className="custom-header-input" />
            <div
              className="search-button"
              onClick={() => onSearch({ target: { value: searchValue } } as React.ChangeEvent<HTMLInputElement>)}
            >
              <button className="btn-ht-search">
                <Search />
              </button>
            </div>
          </div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
