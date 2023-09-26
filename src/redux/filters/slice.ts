import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilter, IFilters } from './types';
import { API_ROUTES, SORT_ORDER } from '../../utils/enums';

const initialState: IFilters = {
  list: [],
  searchValue: '',
  currentSort: SORT_ORDER.DEFAULT,
  selectedFilters: [],
};

export const fetchFilterData = createAsyncThunk(
  'filters/fetchFilterData',
  async () => {
    const response = await axios.get(API_ROUTES.FILTERS);
    return response.data;
  },
);

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    changeSelectedFilter: (state, action) => {
      state.selectedFilters = state.selectedFilters.map((item) => {
        if (item.groupCategory === action.payload.name) {
          const { filter } = action.payload;
          const filterIndex = item.filters.indexOf(filter);
          if (filterIndex === -1) {
            return {
              ...item,
              filters: [...item.filters, filter],
            };
          } else {
            return {
              ...item,
              filters: item.filters.filter((f) => f !== filter),
            };
          }
        }
        return item;
      });
    },
    changeSort: (state, action) => {
      state.currentSort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFilterData.fulfilled,
      (state, action: PayloadAction<Array<IFilter>>) => {
        state.list = action.payload;
        const selectedFilters = action.payload.map((item) => {
          return {
            groupCategory: item.groupCategory,
            filters: [],
          };
        });
        state.selectedFilters = selectedFilters;
      },
    );
  },
});

export const { changeSearchValue, changeSort, changeSelectedFilter } =
  filterSlice.actions;

export default filterSlice.reducer;