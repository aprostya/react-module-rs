import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';
import './styles/search.scss';

interface IProductSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const ProductSearch = ({ value, handleChange }: IProductSearchProps) => {
  return (
    <section className="product-search-container">
      <h1 className="product-search-container__title">Beer search</h1>
      <SearchBar value={value} handleChange={handleChange} />
    </section>
  );
};
