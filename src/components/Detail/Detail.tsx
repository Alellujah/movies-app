import React, { Component } from 'react';
import styled from 'styled-components';

const MoviesList = styled.div`
  color:white;
  width: 83%;
  height: 424px;
  overflow-y: auto;
  margin-top: 64px;
  margin-bottom: 32px;  
  & > span{
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    font-size:2rem;
    font-style: italic;
    color: #747474;
  }
`;

const MoviesCard = styled.div`
  margin-bottom:16px;
  border:1px solid #484848;
`;

const MoviesTD = styled.div`
  margin-right:8px;
`;

const MoviesRow = styled.div`
  display:flex;
  padding: 16px;
`;

interface Props {
  list: Array<any>;
}

interface State { }

class Detail extends Component<Props, State> {

  render() {
    return (
      <MoviesList>
        {this.props.list ? this.props.list.map(m =>
          <MoviesCard key={m.id}>
            <MoviesRow>
              <MoviesTD>
                Title:
                {m.title}
              </MoviesTD>
              <MoviesTD>
                Original Title:
                {m.original_title}
              </MoviesTD>
              <MoviesTD>
                Release Date:
                {m.release_date}
              </MoviesTD>
              <MoviesTD>
                Vote Average:
                {m.vote_average}
              </MoviesTD>
            </MoviesRow>
            <MoviesRow>
              Overview:
              {m.overview}
            </MoviesRow>
          </MoviesCard>
        )
          : <span>Nothing found</span>
        }
      </MoviesList>
    );
  }
}

export default Detail;