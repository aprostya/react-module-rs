import SearchIcon from '../../../assets/searchIcon.svg';
import './searchBar.scss';

interface ISearchBarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar = ({ value, handleChange }: ISearchBarProps) => {
  return (
    <div className="input-container">
      <p className="input-container__title">Search by keyword</p>
      <div className="input-wrapper">
        <div className="input-search">
          <input
            placeholder="Type to search..."
            value={value}
            onChange={handleChange}
          />
          <span className="input-search__icon">
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
