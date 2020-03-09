import { createAsyncAction, createAction } from 'typesafe-actions';
import { APIResponse } from './epics';
import { Movie } from '../../../models';

export const getMoviesByName = createAsyncAction(
    'MOVIE_REQUEST',
    'MOVIE_SUCCESS',
    'MOVIE_FAILURE',
    'MOVIE_CLEAR'
)<string, APIResponse, Error, void>();

export const getMoreMovies = createAsyncAction(
    'GET_MORE_MOVIE_REQUEST',
    'GET_MORE_MOVIE_SUCCESS',
    'GET_MORE_MOVIE_FAILURE'
)<void, APIResponse, Error>();

export const orderMovies = createAction('ORDER_MOVIES', (movies: Movie[]) => (movies))<Movie[]>();