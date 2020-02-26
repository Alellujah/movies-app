import * as Actions from '../actions';
import _ from 'lodash';
import { MovieReducer } from '../models';

const initialState: MovieReducer = {
    selectedMovie: '',
    list: [],
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
                selectedMovie: action.payload,
            }
        case 'MOVIE_SUCCESS':
            return {
                ...state,                
                list: action.payload.results
            }
        case 'MOVIE_CLEAR':
            return {
                ...state,                
                selectedMovie: '',
                list: [] 
            }
        case 'GET_MORE_MOVIE_REQUEST':
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case 'GET_MORE_MOVIE_SUCCESS':
            console.log(state.list);
            return {
                ...state,
                list: [...state.list[action.payload.id], action.payload.results]
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