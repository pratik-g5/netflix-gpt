import { createSlice } from '@reduxjs/toolkit';

const movie = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailer, addPopularMovies } =
  movie.actions;
export default movie.reducer;
