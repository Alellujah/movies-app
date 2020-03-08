import * as searchActions from './actions';
import { Movie } from '../../../models';
import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';

interface MovieState {
    selectedMovie: string;
    list: Movie[];
    pageNumber: number;
    toggleBtn: boolean;
    noMoreResults: boolean;
}

const initialState: MovieState = {
    selectedMovie: '',
    list: [],
    pageNumber: 1,
    toggleBtn: false,
    noMoreResults: false
}

export type SearchActions = ActionType<typeof searchActions>;

export const searchReducer: Reducer<MovieState, SearchActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case getType(searchActions.getMoviesByName.request):
            return {
                ...state,
                selectedMovie: action.payload,
                pageNumber: 1,
                toggleBtn: false
            }
        case getType(searchActions.getMoviesByName.success):
            if (action.payload.results.length < 20) {
                return {
                    ...state,
                    list: [...action.payload.results],
                    toggleBtn: true
                }
            } else {
                return {
                    ...state,
                    list: [...action.payload.results],
                }
            }
        case getType(searchActions.getMoviesByName.cancel):
            return {
                ...state,
                selectedMovie: '',
                list: [],
                toggleBtn: false
            }
        case getType(searchActions.getMoreMovies.request):
            return {
                ...state,
                pageNumber: state.pageNumber + 1,
                toggleBtn: true
            }
        case getType(searchActions.getMoreMovies.success):
            if (action.payload.total_pages === state.pageNumber) {
                return {
                    ...state,
                    list: [...state.list, ...action.payload.results],
                    toggleBtn: true,
                    noMoreResults: true
                }
            } else {
                return {
                    ...state,
                    list: [...state.list, ...action.payload.results],
                    pageNumber: state.pageNumber,
                    toggleBtn: false,
                }
            }
        default:
            return state
    }
}