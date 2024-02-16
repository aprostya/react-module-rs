import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductCardPage } from '../pages/ProductCard/ui/Page/Page';
import { MainPage } from '../pages/main/index';
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
                <MainPage />
              </ErrorBoundary>
            }
          />
          <Route path="/product/:id" element={<ProductCardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
