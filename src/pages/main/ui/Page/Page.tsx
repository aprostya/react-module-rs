import { ProductCardList } from '../../../../features/ProductList/index';
import { ResultsInfo } from '../../../../features/ResultsInfo/ui/ResultsInfo';
import styles from '../../styles/styles.module.css';

export const MainPage: React.FC = () => {
  return (
    <main className={styles.root}>
      <ResultsInfo />
      <ProductCardList />
    </main>
  );
};
