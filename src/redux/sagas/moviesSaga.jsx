import {call,put,takeEvery} from "redux-saga/effects"
import fetchDataFromApi  from "../../utils/Api";
import { fetchMovies,fetchMoviesSuccess } from "../features/movieSlice";

function* getFetchMovies(url){
    // console.log(url)
   const res = yield call(fetchDataFromApi,url.payload)
//    console.log(res)
    yield put(fetchMoviesSuccess(res.data))
}

function* moviesSaga(){
    yield takeEvery(fetchMovies,getFetchMovies)
    // console.log('Done')
}

export default moviesSaga;