import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './redux/features/movieSlice';
import Header from "./components/Header"
import SearchResult from  "./pages/SearchResult"

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMovies('/movie/popular'))
  },[dispatch])

  return (
    <div className="App">
      <Header />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search/:query" element={<SearchResult />} />
       </Routes>
    </div>
  );
}

export default App;
