import React, { useEffect, useMemo } from 'react';
import styles from './styles.module.css';
import { FilmCard } from '../../../entities/film/ui/FilmCard/FilmCard';
import { FilmSearch } from '../../FilmSearch';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../app/appStore';
import { fetchAbilityData } from '../../../entities/film/model/slice';
import { STATUSES } from '../../../shared/lib/enums';
import { EmptyResult } from '../../../shared/ui/EmptyResult';
import { useLocalStorageState } from '../../../shared/lib/useLocalStorage';
import Spinner from '../../../shared/ui/Loader';

export const FilmCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList, status } = useSelector((state: RootState) => state.cards);
  const [searchValue, setInputValue] = useLocalStorageState('searchValue', '');
  const cardListLength = cardList.length;
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/^\s+/, '').replace(/\s+/g, ' ');
    setInputValue(value);
  };

  console.log('cardList');

  const getCardListComponent = useMemo(() => {
    switch (status) {
      case STATUSES.ERROR:
        return <div>Content loading error, please try again later</div>;
      case STATUSES.SUCCESS:
        if (cardListLength === 0) {
          return <EmptyResult />;
        } else {
          return cardList?.map(({ id, title, poster_path }) => (
            <FilmCard key={id} id={id} title={title} poster={poster_path} />
          ));
        }

      default:
        return <Spinner size={50} />;
    }
  }, [status, cardList, cardListLength]);

  useEffect(() => {
    dispatch(fetchAbilityData({ searchValue }));
  }, [dispatch, searchValue]);

  return (
    <div className={styles.root}>
      <FilmSearch value={searchValue} handleChange={handleChangeInput} />
      <article className={styles['product-list']}>
        {getCardListComponent}
      </article>
    </div>
  );
};
