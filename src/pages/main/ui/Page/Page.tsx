import { FilmCardList } from '../../../../features/FilmList/index';
import { ResultsInfo } from '../../../../features/ResultsInfo/ui/ResultsInfo';
import styles from '../../styles/styles.module.css';

export const MainPage: React.FC = () => {
  return (
    <main className={styles.root}>
      <ResultsInfo />
      <FilmCardList />
    </main>
  );
};
