import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movieSlice";
import movieSaga from './sagas/moviesSaga';
import createSagaMiddleware from "@redux-saga/core"

const sagas = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movies:moviesSlice
    },
    middleware:[sagas]
});

sagas.run(movieSaga);