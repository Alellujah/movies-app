import * as Actions from '../actions';
import _ from 'lodash';

const initialState = {
    movie: 'eqweqwe',
    results: [],
    pageNumber: 1
}

export function moviesReducer(
    state = initialState,
    action: any
) {
    switch (action.type) {
        case 'MOVIE_REQUEST':
            return {
                ...state,
                movie: action.payload,

            }
        case 'MOVIE_SUCCESS':
            return {
                ...state,
                results: action.payload.results
            }
        case 'GET_MORE_MOVIE_REQUEST':
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case 'GET_MORE_MOVIE_SUCCESS':
            console.log(state.results);
            return {
                ...state,
                results: [...state.results, action.payload.results]
            }
        case 'GET_MORE_MOVIE_FAILURE':
            return {
                ...state,
                //TODO handle error
            }
        default:
            return state
    }
}