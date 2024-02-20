import React from 'react';
import styles from './styles.module.css';

export const EmptyResult: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3>No results found</h3>
    </div>
  );
};
