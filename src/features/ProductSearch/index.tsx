import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';
import styles from './styles/styles.module.css';

interface IProductSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const ProductSearch = ({ value, handleChange }: IProductSearchProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Product search</h1>
      <SearchBar value={value} handleChange={handleChange} />
    </section>
  );
};
