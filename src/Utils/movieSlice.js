import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaNowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers :{
         addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies =action.payload;
         },
         addTrailorVideo : (state,action) => {
            state.trailerVideo=action.payload;
         },
         addPopularMovies : (state,action) =>{
            state.popularMovies =action.payload;
         },
         
    },
})

export const {addNowPlayingMovies, addTrailorVideo, addPopularMovies }=movieSlice.actions;

export default movieSlice.reducer;