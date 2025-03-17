import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPopularMovies,getTrendingMovies } from "../utills/api";


interface MovieState {
    populerMovies: any[];
    trendingMovies: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: MovieState = {
    populerMovies: [],
    trendingMovies: [],
    loading: false,
    error: null,
  };
  
  export const fetchPopulerMovies = createAsyncThunk(
    "movies/fetchPopulerMovies",
    async () => {
        const response = await getPopularMovies();
        return response.data.results;
    }
  );
export const fetchTrendingMovies = createAsyncThunk(
    "movies/fetchTrendingMovies",
    async () => {
        const response = await getTrendingMovies();
        return response.data.results;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPopulerMovies.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchPopulerMovies.fulfilled, (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.populerMovies = action.payload;
        })
        .addCase(fetchPopulerMovies.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? "Failed to fetch movies";
        })

        .addCase(fetchTrendingMovies.pending, (state) => {
            state.loading = true; 
          })
          .addCase(fetchTrendingMovies.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.loading = false;
            state.trendingMovies = action.payload;
          })
          .addCase(fetchTrendingMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch movies";
          });

    },
  });

  export default movieSlice.reducer;