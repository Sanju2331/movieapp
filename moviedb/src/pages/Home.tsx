import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPopulerMovies, fetchTrendingMovies } from '../redux/movieSlice'; 
import { RootState, AppDispatch } from '../redux/store';
import MovieCard from '../component/MovieCard'; 
import '../styles/MovieList.css';


const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { populerMovies, trendingMovies, loading, error } = useSelector(
    (state: RootState) => state.movies 
  ); 

  useEffect(() => { 
    dispatch(fetchPopulerMovies()); 
    dispatch(fetchTrendingMovies()); 
  }, [dispatch]); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div>
      <h2>Popular Movies</h2>
      <div style={gridStyle}>
        {populerMovies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
  
      <h2>Trending Movies</h2>
      <div style={gridStyle}>
        {trendingMovies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0 30px',
  padding: '0 16px',
  margin: '0 auto',
};

export default MovieList;