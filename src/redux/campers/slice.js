import { createSlice } from "@reduxjs/toolkit";


import {
  getAllCampers,
  getCamperById,
} from "./operations.js";

const INITIAL_STATE = {
  total: 0,
  isRefreshing: false,
  error: null,
  pagination: {
    page: 1,
    limit: 4,
  },
  filters: {
    location: "",
    equipment: {
      AC: { active: false, icon: "#wind" },
      bathroom: { active: false, icon: "#bathroom" },
      kitchen: { active: false, icon: "#kitchen" },
      TV: { active: false, icon: "#tv" },
      radio: { active: false, icon: "#radio" },
      refrigerator: { active: false, icon: "#refrigerator" },
      microwave: { active: false, icon: "#microwave" },
      gas: { active: false, icon: "#gas" },
      water: { active: false, icon: "#water" },
    },
    form: "",
  },
  queryFilters: "",
  items: [],
  campersInfo: {},
  location: "",
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    setPage(state, action) {
      state.pagination.page =
        action.payload;
    },
    addLocation(state, action) {
      state.filters.location =
        action.payload;
    },
    addEquipment(state, action) {
      state.filters.equipment[
        action.payload
      ] =
        !state.filters.equipment[
          action.payload
        ];
    },
    addType(state, action) {
      state.filters.form =
        action.payload;
    },
    addQueryFilters(state, action) {
      state.queryFilters =
        action.payload;
    },
    resetItems(state) {
      state.items = INITIAL_STATE.items;
      state.pagination =
        INITIAL_STATE.pagination;
    },
  },
  extraReducers: (builder) => {
    builder
       .addCase(
        getAllCampers.pending,
        (state) => {
          state.error = null;
          state.isRefreshing = true;
        },
      )
      .addCase(
        getAllCampers.fulfilled,
        (state, { payload }) => {
          const { page } =
            state.pagination;
          state.isRefreshing = false;
          state.it = payload.total;
          if (page === 1) {
            state.items = payload.items;
          } else {
            state.items = [
              ...state.items,
              ...payload.items,
            ];
          }
        },
      )
      .addCase(
        getAllCampers.rejected,
        (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload;
        },
      )

      
      .addCase(
        getCamperById.pending,
        (state) => {
          state.error = null;
          state.isRefreshing = true;
        },
      )
      .addCase(
        getCamperById.fulfilled,
        (state, { payload }) => {
          state.isRefreshing = false;
          state.campersInfo = payload;
        },
      )
      .addCase(
        getCamperById.rejected,
        (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload;
        },
      );
  },
});

export default campersSlice.reducer;