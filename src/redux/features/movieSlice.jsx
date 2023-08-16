import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[],
        isLoading:false
    },
    reducers:{
        fetchMovies:(state)=> {
            state.isLoading=true
        },
        fetchMoviesSuccess:(state,action)=>{
            state.movies=action.payload
            state.isLoading=false
        },
        fetchMoviesFailure:(state,action)=>{
            state.isLoading=false
        }
    }
})

export default moviesSlice.reducer;
export const {fetchMovies,fetchMoviesSuccess,fetchMoviesFailure} = moviesSlice.actions;