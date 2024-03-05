import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type IProductCardProps = {
  id: number;
  poster?: string;
  title: string;
};

export const FilmCard = ({ id, title, poster }: IProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={styles.root}>
      <article className={styles.container}>
        <div className={styles['img-container']}>
          <img src={poster} alt={'Product image'} />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
        </div>
      </article>
    </Link>
  );
};
