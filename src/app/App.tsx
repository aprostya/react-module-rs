import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductCardDetail } from '../pages/ProductCardDetail';
import { Main } from '../pages/Main';
import ErrorBoundary from '../shared/ui/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Main />
              </ErrorBoundary>
            }
          />
          <Route path="/product/:id" element={<ProductCardDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
