import { ProductCardList } from '../../../../features/ProductList/index';
import { ResultsInfo } from '../../../../features/ResultsInfo/ui/ResultsInfo';
import { ProductSearch } from '../../../../features/ProductSearch';
import { useState } from 'react';

const ErrorComponent: React.FC = () => {
  throw new Error('Error in Main Component');
};

export const MainPage: React.FC = () => {
  const [isErrorComponent, showErrorComponent] = useState(false);
  return (
    <>
      <ProductSearch />
      <div className="results-container">
        <div className="results-wrapper">
          <button
            className="button-error"
            onClick={() => showErrorComponent(true)}
          >
            Test Error Boundary
          </button>
          {isErrorComponent && <ErrorComponent />}
          <ResultsInfo />
        </div>
      </div>
      <ProductCardList />
    </>
  );
};
