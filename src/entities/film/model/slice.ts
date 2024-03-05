import axios, { AxiosResponse } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IFilms } from './types';
import { IProductQueryParams } from '../../../shared/lib/types';
import { API_ROUTES, STATUSES } from '../../../shared/lib/enums';
import { config } from '../../../shared/server/config';

type ICardsList = { cardList: IFilms['results']; status: STATUSES };

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
    if (searchValue.trim() === '') {
      //TODO единая функция
      response = await axios.get(
        `${API_ROUTES.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: 'Bearer ' + config.API_KEY,
          },
        }
      );
    } else {
      response = await axios.get(
        `${API_ROUTES.BASE_URL}/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: 'Bearer ' + config.API_KEY,
          },
        }
      );
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
    builder.addCase(
      fetchAbilityData.fulfilled,
      (state, action: PayloadAction<IFilms>) => {
        const mappedAction = action.payload.results.map((item) => {
          return {
            ...item,
            poster_path: API_ROUTES.POSTER_URL + item.poster_path + '/',
          };
        });
        state.status = STATUSES.SUCCESS;
        state.cardList = mappedAction;
      }
    );
    builder.addCase(fetchAbilityData.rejected, (state) => {
      state.status = STATUSES.ERROR;
      state.cardList = [];
    });
  },
});

export default cardSlice.reducer;
