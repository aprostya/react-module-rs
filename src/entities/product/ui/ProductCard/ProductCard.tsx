import { Link } from 'react-router-dom';
import './ProductCard.scss';

// TODO extend IProductItem and remapping ?
type IProductItemProps = {
  id: number;
  name: string;
  tagline?: string;
  firstBrewed: string;
  description: string;
  imageUrl: string;
};

export const ProductCard = ({
  id,
  name,
  description,
  imageUrl,
  firstBrewed,
}: IProductItemProps) => {
  return (
    <Link key={name} to={`/product/${id}`} className="card-list-wrapper">
      <section className="cards-list">
        <article className="card-list-item">
          <div className="card-list-item__img-container">
            <img src={imageUrl} alt={imageUrl} />
          </div>
          <div className="card-list-item-text">
            <h3>{name}</h3>
            <p className="card-list-item-text__descr">{description}</p>
            <p>{firstBrewed}</p>
          </div>
        </article>
      </section>
    </Link>
  );
};
