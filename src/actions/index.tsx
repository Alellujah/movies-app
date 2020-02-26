///import { getMoviesByName } from '../apis/';
import { createAsyncAction } from 'typesafe-actions';
import { Movie } from '../models';

export const getMoviesByName = createAsyncAction(
    'MOVIE_REQUEST',
    'MOVIE_SUCCESS',
    'MOVIE_FAILURE'
)<string, unknown, void>();

interface MoviePage {
    movie: string;
    pageNumber: number;
}
export const getMoreMovies = createAsyncAction(
    'GET_MORE_MOVIE_REQUEST',
    'GET_MORE_MOVIE_SUCCESS',
    'GET_MORE_MOVIE_FAILURE'
)<MoviePage, unknown, void>();