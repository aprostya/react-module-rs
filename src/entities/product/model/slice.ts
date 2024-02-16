import axios, { AxiosResponse } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProductItem } from './types';
import { IProductQueryParams } from '../../../shared/lib/types';
import { API_ROUTES, STATUSES } from '../../../shared/lib/enums';

type ICardsList = { cardList: Array<IProductItem>; status: STATUSES };

const initialState: ICardsList = {
  cardList: [],
  status: STATUSES.LOADING,
};

// TODO createApi from redux toolkit ?
export const fetchAbilityData = createAsyncThunk(
  'filters/fetchAbilityData',
  async (params: IProductQueryParams) => {
    const { searchValue } = params;
    let response: AxiosResponse;
    if (searchValue !== '') {
      response = await axios.get(
        `${API_ROUTES.BASE_URL}/products?title=${searchValue}`
      );
    } else {
      response = await axios.get(`${API_ROUTES.BASE_URL}/products`);
    }
    return response.data;
  }
);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAbilityData.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.cardList = [];
    });
    builder.addCase(fetchAbilityData.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.cardList = action.payload;
    });
    builder.addCase(fetchAbilityData.rejected, (state) => {
      state.status = STATUSES.ERROR;
      state.cardList = [];
    });
  },
});

export default cardSlice.reducer;
