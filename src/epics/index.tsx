import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, switchMap, catchError, map } from 'rxjs/operators';
import { RootAction, RootState, isActionOf } from 'typesafe-actions';

import { getMoviesByName, getMoreMovies } from '../actions';
import { Movie } from '../models';

const API_KEY: string = "03b8572954325680265531140190fd2a";
const URL: string = "https://api.themoviedb.org/3/search/movie";

// interface Response {
//   page: number;
//   total_results: number;
//   total_pages: number;
//   results: [];
// }

// action creators
// const fetchUser = username => ({ type: FETCH_USER, payload: username });
// const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// // epic
// const fetchUserEpic = action$ => action$.pipe(
//   ofType(FETCH_USER),
//   mergeMap(action =>
//     ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
//       map(response => fetchUserFulfilled(response))
//     )
//   )
// );

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
            response
            // [
            //   {            
            //     id: (response as Movie).id,
            //     title: (response as Movie).title,
            //     original_title: (response as Movie).original_title,
            //     release_date: (response as Movie).release_date,
            //     vote_avg: (response as Movie).vote_average,
            //     overview: (response as Movie).overview,
            //   }
            // ]
          ),
          catchError((err) => of(getMoviesByName.failure(err)))
        ),
      )));    

// export const getMoreMoviesEpic: Epic<
//   RootAction,
//   RootAction,
//   RootState
// > = (action$) =>
//     action$.pipe(
//       filter(isActionOf(getMoreMovies.request)),
//       switchMap((action) =>
//         ajax.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.payload.movie}&page=${action.payload.pageNumber}`).pipe(
//           switchMap(response => {
//             return of(getMoreMovies.success(response))
//           }),
//           catchError((err) => of(getMoreMovies.failure()))
//         ),
//       ));