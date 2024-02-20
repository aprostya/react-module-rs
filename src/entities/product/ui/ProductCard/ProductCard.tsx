import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type IProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const ProductCard = ({ id, title, image, price }: IProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={styles.root}>
      <article className={styles.container}>
        <div className={styles['img-container']}>
          <img src={image} alt={'Product image'} />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </article>
    </Link>
  );
};
