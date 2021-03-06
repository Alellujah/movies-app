import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import SearchPage, { ISearchProps } from "./SearchPage";
import * as actions from './redux/actions';
import { Dispatch } from 'redux';
import { SearchActions } from "./redux/reducers";
import { Movie } from "../../models";

const mapStateToProps = (state: RootState): ISearchProps => ({
    selectedMovie: state.movies.selectedMovie,
    list: state.movies.list,
    pageNumber: state.movies.pageNumber,
    toggleBtn: state.movies.toggleBtn,
    noMoreResults: state.movies.noMoreResults
});
const mapDispatchToProps = (dispatch: Dispatch<SearchActions>) => {
    return {
        getMoviesByName: (movieName: string) => dispatch(actions.getMoviesByName.request(movieName)),
        clearMovies: () => dispatch(actions.getMoviesByName.cancel()),
        getMoreMovies: () => dispatch(actions.getMoreMovies.request()),
        orderMovies: (orderedList: Movie[]) => dispatch(actions.orderMovies(orderedList))
    }
}

export const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage);