import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../../shared/lib/types';
import { STATUSES } from '../../../shared/lib/enums';

const initialState: IFilters & { status: STATUSES } = {
  searchValue: '',
  status: STATUSES.LOADING,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
