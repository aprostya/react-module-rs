import React, { useEffect } from 'react';
import './ProductCardList.scss';
import { ProductCard } from '../../../entities/product/ui/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../app/appStore';
import { fetchAbilityData } from '../../../entities/product/model/slice';
import { STATUSES } from '../../../shared/lib/enums';
import { EmptyResult } from '../../../shared/ui/EmptyResult';

export const ProductCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList, status } = useSelector((state: RootState) => state.cards);
  const { searchValue } = useSelector((state: RootState) => state.filters);

  const cardListLength = cardList.length;

  const getCardListComponent = () => {
    switch (status) {
      case STATUSES.ERROR:
        return <div>Content loading error, please try again later</div>;
      case STATUSES.SUCCESS:
        if (cardListLength === 0) {
          return <EmptyResult />;
        } else {
          return cardList?.map(
            ({ id, title, price, description, category: { image } }) => (
              <ProductCard
                id={id}
                title={title}
                description={description}
                image={image}
                price={price}
              />
            )
          );
        }

      default:
        return <div>Content loading</div>;
    }
  };

  useEffect(() => {
    dispatch(fetchAbilityData({ searchValue }));
  }, [dispatch, searchValue]);

  return <article className="card-list">{getCardListComponent()}</article>;
};
