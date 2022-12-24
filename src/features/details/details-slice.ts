import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {Country, Extra, Status} from '../../types';

export const loadCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  { extra: Extra }
>('@@details/load-details-by-name', (name, { extra: { client, api } }) => {
  return client.get(api.searchByName(name));
});

export const loadNeighborsByBorder = createAsyncThunk<
  { data: Country[] },
  string[],
  { extra: Extra }
>(
  '@@details/load-neighbors-by-border',
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  },
);

type DetailsSlice = {
  currentCountry: Country | null;
  neighbors: string[];
  status: Status;
  error: string | null;
}

const initialState: DetailsSlice = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

export const detailSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadCountryByName.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Can not load data';
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.status = 'idle';
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

export const { clearDetails } = detailSlice.actions;
export default detailSlice.reducer;
