import { SearchBar } from '../../shared/ui/SearchBar/SearchBar';
import './styles/search.scss';

export const ProductSearch = () => {
  return (
    <section className="product-search-container">
      <h1 className="product-search-container__title">Beer search</h1>
      <SearchBar />
    </section>
  );
};
