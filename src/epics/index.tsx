import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { RootAction, RootState, isActionOf } from 'typesafe-actions';

import { getMoviesByName, getMoreMovies } from '../actions';

const API_KEY: string = "03b8572954325680265531140190fd2a";

interface Response {
  page: number;
  total_results: number;
  total_pages: number;
  results: [];
}

export const getMoviesEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (action$) =>
    action$.pipe(
      filter(isActionOf(getMoviesByName.request)),
      switchMap(action =>
        ajax.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.payload}`).pipe(
          switchMap(response => {
            return of(getMoviesByName.success(response))
          }),
          catchError((err) => of(getMoviesByName.failure()))
        ),
      ));
export const getMoreMoviesEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (action$) =>
    action$.pipe(
      filter(isActionOf(getMoreMovies.request)),
      switchMap((action) =>
        ajax.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.payload.movie}&page=${action.payload.pageNumber}`).pipe(
          switchMap(response => {
            return of(getMoreMovies.success(response))
          }),
          catchError((err) => of(getMoreMovies.failure()))
        ),
      ));