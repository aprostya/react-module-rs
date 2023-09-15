import './styles/app.scss';
import { FiltersList } from './components/Filters/index';
import { ProductCardList } from './components/ProductCards/index';
import { ResultsInfo } from './components/ResultsInfo/index';
import { Sort } from './components/Sort/index';
import { ProductSearch } from './components/ProductSearch';

function App() {
  return (
    <div className="wrapper">
      <ProductSearch />
      <FiltersList />
      <div className="sort-container">
        <div className="sort-wrapper">
          <ResultsInfo />
          <Sort />
        </div>
      </div>
      <ProductCardList />
    </div>
  );
}

export default App;
