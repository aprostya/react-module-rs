import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/appStore';
import './results.scss';

export const ResultsInfo: React.FC = () => {
  const cardListLength = useSelector(
    (state: RootState) => state.cards.cardList.length
  );

  return (
    <span className="results-info-container">
      Showing {cardListLength} results
    </span>
  );
};
