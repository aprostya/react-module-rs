import React from 'react';
import { IProductItem } from '../../redux/products/types';

export const ProductCard = ({
  title,
  description,
  price,
  image,
}: IProductItem) => {
  return (
    <section className="cards-list">
      <article className="card-list-item">
        <a href="a" className="card-list-item__img-container">
          <img src={image?.src} alt={image?.alt} />
        </a>
        <div className="card-list-item__text-block">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </article>
    </section>
  );
};
