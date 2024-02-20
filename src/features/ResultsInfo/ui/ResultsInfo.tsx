import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/appStore';
import styles from './styles.module.css';

export const ResultsInfo: React.FC = () => {
  const cardListLength = useSelector(
    (state: RootState) => state.cards.cardList.length
  );

  return (
    <span className={styles.container}>Showing {cardListLength} results</span>
  );
};
