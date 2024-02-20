import SearchIcon from '../../../assets/searchIcon.svg';
import styles from './styles.module.css';

interface ISearchBarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar = ({ value, handleChange }: ISearchBarProps) => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>Search by keyword</p>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <input
            placeholder="Type to search..."
            value={value}
            onChange={handleChange}
          />
          <span className={styles.icon}>
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
