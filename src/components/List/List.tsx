import React, { Component } from 'react';
import styled from 'styled-components';

const MoviesList = styled.div`
  color:white;
  margin-top: 132px;
  margin-bottom: 32px;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  margin: 16px;
  width: 30%;
  justify-content: space-evenly;
  box-shadow:1px 1px 8px #292929;
`;

const MoviesTD = styled.div`
  margin-right:8px;
  display:flex;
  flex-flow:column;
  line-length: 1.2; 
  & > span{
    font-size:.6rem;
    color:#9a9a9a;
  }
`;

const MoviesRow = styled.div`
  display:flex;
  padding: 16px;
  font-size:.9rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  border:0;
  color:#ffdd00;
  background:none;
  `;

interface Props {
  list: Array<any>;
}

interface State { }

class List extends Component<Props, State> {

  render() {
    return (
      <MoviesList>
        {this.props.list && this.props.list.length > 0 ? this.props.list.map(m =>
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
          </MoviesCard>
        )
          : <span>Nothing found</span>
        }
      </MoviesList>
    );
  }
}

export default List;