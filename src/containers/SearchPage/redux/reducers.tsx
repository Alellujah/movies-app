import * as searchActions from './actions';
import { Movie } from '../../../models';
import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';
import keyBy from 'lodash/keyBy';

interface MovieState {
    selectedMovie: string;
    list: { [key: number]: Movie }
    pageNumber: number;
    toggleBtn: boolean;
}

const initialState: MovieState = {
    selectedMovie: '',
    list: {},
    pageNumber: 1,
    toggleBtn: false,
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
                pageNumber: 1
            }
        case getType(searchActions.getMoviesByName.success):
            console.log('Typing and searching...');
            if (action.payload.results.length < 20) {
                return {
                    ...state,
                    list: keyBy(action.payload.results, o => o.id),
                    toggleBtn: true
                }
            } else {
                return {
                    ...state,
                    list: keyBy(action.payload.results, o => o.id)
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
                pageNumber: state.pageNumber + 1
            }
        case getType(searchActions.getMoreMovies.success):
            console.log('Getting more movies...');
            if (action.payload.total_pages === state.pageNumber) {
                return {
                    ...state,
                    list: Object.assign({ ...state.list }, keyBy(action.payload.results, o => o.id)),
                    toggleBtn: true
                }
            } else {
                return {
                    ...state,
                    list: Object.assign({ ...state.list }, keyBy(action.payload.results, o => o.id)),
                    pageNumber: state.pageNumber
                }
            }
        default:
            return state
    }
}