import React, { Component } from 'react';
import { Movie } from '../../models/';
import { MoviesList, MoviesCard, MoviesRow, MoviesTD, Button } from './styleComponents';
import _map from 'lodash/map';

interface IListProps {
  movieList: Movie[];
  loadMore: () => void;
  disableBtn?: boolean;
}

class List extends Component<IListProps> {
  renderList(movieList: Movie[]) {
    return (
      <MoviesList>
        {Object.keys(movieList).length > 0 ?
          _map(Object.keys(movieList), (id: number) => {
            const m: Movie = movieList[id];
            return (
              <MoviesCard key={m.id}>
                <MoviesRow>
                  <MoviesTD>
                    <span>Title:</span>
                    {m.title}
                  </MoviesTD>
                  <MoviesTD>
                    <span>Original Title:</span>
                    {m.original_title}
                  </MoviesTD>
                  <MoviesTD>
                    <span>Release Date:</span>
                    {m.release_date}
                  </MoviesTD>
                  <MoviesTD>
                    <span>Vote Average:</span>
                    {m.vote_average}
                  </MoviesTD>
                </MoviesRow>
                {m.overview &&
                  <MoviesRow>
                    {m.overview}
                  </MoviesRow>
                }
                <Button>Details</Button>
              </MoviesCard>)
          })
          :
          <span>Nothing found</span>
        }
      </MoviesList>
    )
  }

  render() {
    const { movieList, loadMore, disableBtn } = this.props;
    return (
      <>
        {this.renderList(movieList)}
        {Object.keys(movieList).length > 0 && !disableBtn &&
          <Button onClick={() => loadMore()}>Load More</Button>
        }
      </>
    )
  }
}

export default List;