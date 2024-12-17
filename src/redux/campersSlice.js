import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../api/campersAPI';

export const loadCampers = createAsyncThunk(
  'campers/loadCampers',
  async ({ filters, page }) => {
    return await fetchCampers(filters, page);
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: { items: [], status: 'idle', page: 1, filters: {} },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.items = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCampers.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.status = 'succeeded';
      });
  },
});

export const { setFilters, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;