import { useDispatch } from 'react-redux';
import { changeSearchValue } from '../../../entities/filter/model/slice';
import SearchIcon from '../../../assets/searchIcon.svg';
import { useLocalStorageState } from '../../../shared/lib/useLocalStorage';
import './searchBar.scss';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setInputValue] = useLocalStorageState('searchValue', '');
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/^\s+/, '').replace(/\s+/g, ' ');
    setInputValue(value);
    dispatch(changeSearchValue(value));
  };

  return (
    <div className="input-container">
      <p className="input-container__title">Search by keyword</p>
      <div className="input-wrapper">
        <div className="input-search">
          <input
            placeholder="Type to search..."
            value={value}
            onChange={handleChangeInput}
          />
          <span className="input-search__icon">
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
