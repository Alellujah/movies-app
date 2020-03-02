import { createAsyncAction, createAction } from 'typesafe-actions';
import { APIResponse } from './epics';

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

export const checkIfMoreAvailable = createAsyncAction(
    'MORE_AVAILABLE_REQUEST',
    'MORE_AVAILABLE_SUCCESS',
    'MORE_AVAILABLE_FAILURE'
)<void, APIResponse, Error>();

export const openModal = createAction('OPEN_MODAL', action => {
    return (id: number) => action({ id })
});