import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from '../entities/filter/model/slice';
import cardSlice from '../entities/film/model/slice';

const store = configureStore({
  reducer: {
    filters: filterSlice,
    cards: cardSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
