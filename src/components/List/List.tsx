import React, { Component } from 'react';
import { Movie } from '../../models/';
import { MoviesList, MoviesCard, MoviesRow, MoviesTD, Button, ButtonList } from './styleComponents';
import _map from 'lodash/map';

interface IListProps {
  movieList: Movie[];
  loadMore: () => void;
  disableBtn?: boolean;
  onClickDetail: (id: number) => void;
}

class List extends Component<IListProps> {
  renderList(movieList: Movie[]) {
    const { onClickDetail } = this.props;
    return (
      <MoviesList>
        {Object.keys(movieList).length > 0 ?
          _map(movieList, m => {
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
                <ButtonList onClick={() => onClickDetail(m.id)}>Details</ButtonList>
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
        {Object.keys(movieList).length > 0 &&
          <Button disabled={disableBtn} onClick={() => loadMore()}>
            {!disableBtn ? 'Load More' : 'No more results...'}
          </Button>
        }
      </>
    )
  }
}

export default List;