import React, { Component } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { Movie } from '../../models';

export interface ISearchProps {
    selectedMovie: string,
    list: Movie[],
    pageNumber: number,
    toggleBtn: boolean
}

export interface ISearchActions {
    getMoviesByName: (e: string) => void;
    clearMovies: () => void,
    getMoreMovies: () => void,
    checkIfMoreAvailable: () => void,
}

type SearchComponentProps = ISearchProps & ISearchActions;

class SearchPage extends Component<SearchComponentProps> {

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        const { getMoviesByName, clearMovies } = this.props;
        !!e.currentTarget.value ? getMoviesByName(e.currentTarget.value) : clearMovies()
    }

    render() {
        const { selectedMovie, list, toggleBtn, getMoreMovies, checkIfMoreAvailable } = this.props;
        return (
            <>
                <Search
                    selectedMovie={selectedMovie}
                    handleChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e)}
                />
                <List
                    movieList={list}
                    loadMore={() => { getMoreMovies(); checkIfMoreAvailable(); }}
                    disableBtn={toggleBtn}
                />
            </>
        );
    }
}

export default SearchPage;
