import { createAsyncAction } from 'typesafe-actions';
import { Movie } from '../models';

export const getMoviesByName = createAsyncAction(
    'MOVIE_REQUEST',
    'MOVIE_SUCCESS',
    'MOVIE_FAILURE',
    'MOVIE_CLEAR'
)<string, unknown, Error, void>();

export const getMoreMovies = createAsyncAction(
    'GET_MORE_MOVIE_REQUEST',
    'GET_MORE_MOVIE_SUCCESS',
    'GET_MORE_MOVIE_FAILURE'
)<void, Movie[], Error>();
