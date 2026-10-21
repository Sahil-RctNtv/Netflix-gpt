import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;






