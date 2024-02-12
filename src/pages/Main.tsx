import { ProductCardList } from '../features/ProductList/index';
import { ResultsInfo } from '../features/ResultsInfo/ui/ResultsInfo';
import { Sort } from '../features/Sort/ui/Sort';
import { ProductSearch } from '../features/ProductSearch';

export const Main: React.FC = () => {
  return (
    <>
      <ProductSearch />
      <div className="sort-container">
        <div className="sort-wrapper">
          <ResultsInfo />
          <Sort />
        </div>
      </div>
      <ProductCardList />
    </>
  );
};
