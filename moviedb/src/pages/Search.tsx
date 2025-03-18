import React, { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {searchMoviesAsync} from '../redux/movieSlice';
import MovieCard from '../component/MovieCard';
import loading from '../component/Loading';
import {AppDispatch} from '../redux/store';
import { useLocation } from 'react-router-dom';



interface Movie { 
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    vote_average: number | null
}

interface RootState {
    movies: {
        searchResults: Movie[]
        loading: boolean
        error: string | null
    };

    }

    //custom jooks
    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }
const search: React.FC = () => {
    const query = useQuery();
    const searchQuery = query.get('q');
    const dispatch = useDispatch<AppDispatch>();
    const {searchResults, loading, error} = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if (searchQuery) {
          dispatch(searchMoviesAsync(searchQuery));
        }
    }, [dispatch, searchQuery]);

    if (loading) return <h2>Loading...</h2>;
}


export default search;