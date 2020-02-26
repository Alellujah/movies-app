import React, { Component } from 'react';
import List from '../List/';
import styled from 'styled-components';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RootState } from 'typesafe-actions';

const SearchInput = styled.input`
  position:fixed;
  top:32px;
  padding: 16px;
  border: 0;
  border-radius: 4px;
  box-shadow: 1px 1px 8px #000000;
  width: 80%;
  height: 24px;
  margin-top:32px;
  outline: 0;
  transition: all ease .2s;
  &:focus {
    box-shadow: 0px 0px 0px #000000;
  }
`;
const Button = styled.button`
  border:0;
  background-color: #ffdd00;
  padding: 16px 32px;
  cursor: pointer;
  border-radius:24px;
  font-weight: bold;
  font-size:.8rem;
  transition: all ease .2s;
  outline:0;
  &:focus{
    outline:0;
  }
  &:hover{
    background-color: #fff29e;
    box-shadow: 1px 1px 8px #000000;
  }
`;

const mapStateToProps = (state: RootState) => ({
  selectedMovie: state.movies.selectedMovie,
  list: state.movies.list,
  pageNumber: state.movies.pageNumber,
});
const dispatchProps = {
  getMoviesByName: (e: any) => actions.getMoviesByName.request(e),
  clearMovies: actions.getMoviesByName.cancel
  // getMoreResults: (movie: string, pageNumber: number) => actions.getMoreMovies.request({ movie, pageNumber }),
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;


class Search extends Component<Props> {

  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     movie: '',
  //     results: [],
  //     pageNumber: 1
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.loadMore = this.loadMore.bind(this);
  // }
  //componentWillMount() {}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  // getMovieList(movieName: string) {
  //   console.log('hello', this.state.results);
  //   const API_KEY: string = "03b8572954325680265531140190fd2a";
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
  //     .then(res => res.json()
  //       .then(data => {
  //         this.setState({ results: data.results });
  //       }))
  // }

  // getMoreResults(pageNumber: number) {
  //   const { movie } = this.state;
  //   const API_KEY: string = "03b8572954325680265531140190fd2a";
  //   const movies: Array<any> = [...this.state.results];
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&page=${pageNumber}`)
  //     .then(res => res.json()
  //       .then(data => {
  //         movies.push(data.results);
  //         this.setState({ results: _.flatten(movies) });
  //         console.log(movies);
  //       }))
  // }

  // handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
  //   this.setState({ movie: e.target.value, pageNumber: 1 });
  //   this.getMoviesByName(e.target.value);
  // }

  // loadMore() {
  //   this.setState({ pageNumber: this.state.pageNumber + 1 });
  //   this.getMoreResults(this.state.pageNumber + 1);
  // }
  handleChange(e: any){
    const {getMoviesByName, clearMovies} = this.props;
    !!e.target.value ?
      getMoviesByName(e.target.value)
      :
      clearMovies()
  }
  render() {
    const { getMoviesByName, selectedMovie, list, pageNumber } = this.props;
    return (
      <>
        <SearchInput type="text" value={selectedMovie} onChange={(e) => this.handleChange(e)} placeholder={'Search for movie'} />
        <List list={list} />
        {/* {list && list.length > 0 &&
          // <Button onClick={() => getMoreResults(movie, pageNumber)}> Load More </Button>
        } */}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(Search);
