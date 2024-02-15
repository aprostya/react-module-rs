import { Link } from 'react-router-dom';
import './ProductCard.scss';

type IProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export const ProductCard = ({
  id,
  title,
  description,
  image,
  price,
}: IProductCardProps) => {
  return (
    <Link key={id} to={`/product/${id}`} className="card-list-wrapper">
      <section className="cards-list">
        <article className="card-list-item">
          <div className="card-list-item__img-container">
            <img src={image} alt={'Product image'} />
          </div>
          <div className="card-list-item-text">
            <h3>{title}</h3>
            <p className="card-list-item-text__descr">{description}</p>
            <p>{price}</p>
          </div>
        </article>
      </section>
    </Link>
  );
};
