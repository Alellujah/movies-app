import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, switchMap, catchError, map } from 'rxjs/operators';
import { RootAction, RootState, isActionOf } from 'typesafe-actions';
import { getMoviesByName, getMoreMovies } from './actions';
import { Movie } from '../../../models';

const API_KEY: string = "03b8572954325680265531140190fd2a";
const URL: string = "https://api.themoviedb.org/3/search/movie";

export interface APIResponse {
  page: number,
  total_results: number,
  total_pages: number,
  results: Movie[],
}

export const getMoviesEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = action$ =>
    action$.pipe(
      filter(isActionOf(getMoviesByName.request)),
      switchMap(action =>
        ajax.getJSON(`${URL}?api_key=${API_KEY}&query=${action.payload}`).pipe(
          map(response => getMoviesByName.success(
            response as APIResponse
          ),
            catchError((err) => of(getMoviesByName.failure(err)))
          ),
        )));

export const getMoreMoviesEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (action$, state$) =>
    action$.pipe(
      filter(isActionOf(getMoreMovies.request)),
      switchMap(action =>
        ajax.getJSON(`${URL}?api_key=${API_KEY}&query=${state$.value.movies.selectedMovie}&page=${state$.value.movies.pageNumber}`).pipe(
          map((response) =>
            getMoreMovies.success(response as APIResponse),
          ),
          catchError((err) => of(getMoreMovies.failure(err)))
        )
      ));
