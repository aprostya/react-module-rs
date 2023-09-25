import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem } from './types';
import { API_ROUTES } from '../../utils/enums';
import { IProductQueryParams, STATUSES } from '../../types/type';
import { getSelectedFiltersQueryString } from '../../utils/utils';

type ICardsList = { cardList: Array<IProductItem>; status: STATUSES };

const initialState: ICardsList = {
  cardList: [],
  status: STATUSES.LOADING,
};

export const fetchCardData = createAsyncThunk(
  'filters/fetchCardData',
  async (params: IProductQueryParams) => {
    const { searchValue, selectedFilters } = params;
    const isFiltersNotEmpty = selectedFilters.some(
      (item) => item.filters.length > 0,
    );
    let response;
    if (isFiltersNotEmpty) {
      response = await axios.get(
        `${
          API_ROUTES.CARDS
        }?search=${searchValue}&${getSelectedFiltersQueryString(
          selectedFilters,
        )}`,
      );
    } else {
      response = await axios.get(`${API_ROUTES.CARDS}?search=${searchValue}`);
    }
    return response.data;
  },
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.cardList = [];
    });
    builder.addCase(fetchCardData.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.cardList = action.payload;
    });
    builder.addCase(fetchCardData.rejected, (state) => {
      state.status = STATUSES.ERROR;
      state.cardList = [];
    });
  },
});

export default cardSlice.reducer;
