import * as Actions from './actions';
import { MovieReducer } from '../../../models';
import { ActionType, getType } from 'typesafe-actions';
import keyBy from 'lodash/keyBy';

const initialState: MovieReducer = {
    selectedMovie: '',
    list: {},
    pageNumber: 1,
    toggleBtn: false
}

export type SearchActions = ActionType<typeof Actions>;

export function searchReducer(
    state = initialState,
    action: SearchActions
) {
    switch (action.type) {
        case getType(Actions.getMoviesByName.request):
            return {
                ...state,
                selectedMovie: action.payload,
                pageNumber: 1
            }
        case getType(Actions.getMoviesByName.success):
            console.log('typing and getting movies');
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
        case getType(Actions.getMoviesByName.cancel):
            return {
                ...state,
                selectedMovie: '',
                list: [],
                toggleBtn: false
            }
        case getType(Actions.getMoreMovies.request):
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case getType(Actions.getMoreMovies.success):
            console.log('getting more movies');
            return {
                ...state,
                list: Object.assign({ ...state.list }, keyBy(action.payload.results, o => o.id)),
                pageNumber: state.pageNumber
            }
        case getType(Actions.getMoreMovies.failure):
            return {
                ...state,
                //TODO handle error
            }
        case getType(Actions.checkIfMoreAvailable.success):
            console.log('checking if theres more available');
            if (action.payload.results.length === 0) {
                return {
                    ...state,
                    toggleBtn: true
                }
            } else { return { ...state } }
        case getType(Actions.checkIfMoreAvailable.failure):
            return {
                ...state,
                //TODO handle error
            }
        default:
            return state
    }
}