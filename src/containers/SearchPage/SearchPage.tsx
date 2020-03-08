import React, { Component } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { Movie } from '../../models';
import Detail from '../../components/Detail/Detail';

export interface ISearchProps {
    selectedMovie: string,
    list: Movie[],
    pageNumber: number,
    toggleBtn: boolean,
    noMoreResults: boolean,
}

interface ISearchState {
    showModal: boolean;
    selectedId: number;
}
export interface ISearchActions {
    getMoviesByName: (e: string) => void;
    clearMovies: () => void,
    getMoreMovies: () => void,
}

type SearchComponentProps = ISearchProps & ISearchActions;

class SearchPage extends Component<SearchComponentProps, ISearchState> {
    constructor(props: SearchComponentProps) {
        super(props);
        this.state = {
            showModal: false,
            selectedId: 0
        }
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        const { getMoviesByName, clearMovies } = this.props;
        !!e.currentTarget.value ? getMoviesByName(e.currentTarget.value) : clearMovies()
    }

    renderDetails(movieList: Movie[], movieId: number) {
        const m = movieList.filter(m => m.id === movieId)[0];
        return (
            <Detail
                id={m.id}
                title={m.title}
                original_title={m.original_title}
                release_date={m.release_date}
                vote_average={m.vote_average}
                overview={m.overview}
                popularity={m.popularity}
                original_language={m.original_language}
                poster_path={m.poster_path}
                showModal={true}
                onClose={() => this.setState({ showModal: false })}
            />
        )
    }

    render() {
        const { selectedMovie,
            list,
            toggleBtn,
            getMoreMovies,
            noMoreResults
        } = this.props;
        const { showModal, selectedId } = this.state;
        return (
            <>
                <Search
                    selectedMovie={selectedMovie}
                    handleChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e)}
                />
                <List
                    movieList={list}
                    loadMore={() => getMoreMovies()}
                    disableBtn={toggleBtn}
                    noMoreResults={noMoreResults}
                    onClickDetail={(id: number) => this.setState({ showModal: true, selectedId: id })}
                />
                {showModal && this.renderDetails(list, selectedId)}
            </>
        );
    }
}

export default SearchPage;
