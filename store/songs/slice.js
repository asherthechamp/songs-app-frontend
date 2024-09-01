import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    list: [],
    loading: false,
    error: null,
    filter: "", // Add filter state
  },
  reducers: {
    fetchSongsRequest: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Add filter action
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  setFilter,
} = songsSlice.actions;

export default songsSlice.reducer;
