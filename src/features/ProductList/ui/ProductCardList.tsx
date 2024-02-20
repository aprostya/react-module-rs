import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.css';
import { ProductCard } from '../../../entities/product/ui/ProductCard/ProductCard';
import { ProductSearch } from '../../ProductSearch';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../app/appStore';
import { fetchAbilityData } from '../../../entities/product/model/slice';
import { STATUSES } from '../../../shared/lib/enums';
import { EmptyResult } from '../../../shared/ui/EmptyResult';
import { useLocalStorageState } from '../../../shared/lib/useLocalStorage';

export const ProductCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList, status } = useSelector((state: RootState) => state.cards);
  const [searchValue, setInputValue] = useLocalStorageState('searchValue', '');
  const cardListLength = cardList.length;
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/^\s+/, '').replace(/\s+/g, ' ');
    setInputValue(value);
  };

  const getCardListComponent = useMemo(() => {
    switch (status) {
      case STATUSES.ERROR:
        return <div>Content loading error, please try again later</div>;
      case STATUSES.SUCCESS:
        if (cardListLength === 0) {
          return <EmptyResult />;
        } else {
          return cardList?.map(({ id, title, price, category: { image } }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
            />
          ));
        }

      default:
        return <div>Content loading</div>;
    }
  }, [status, cardList, cardListLength]);

  useEffect(() => {
    dispatch(fetchAbilityData({ searchValue }));
  }, [dispatch, searchValue]);

  return (
    <div className={styles.root}>
      <ProductSearch value={searchValue} handleChange={handleChangeInput} />
      <article className={styles['product-list']}>
        {getCardListComponent}
      </article>
    </div>
  );
};
