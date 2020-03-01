import React, { Component } from 'react';
import { SearchInput } from './styleComponents';

interface ISearchProps {
  selectedMovie: string,
  handleChange: () => void
}

class Search extends Component<ISearchProps> {
  render() {
    const { selectedMovie, handleChange } = this.props;
    return (
      <>
        <SearchInput type="text"
          value={selectedMovie}
          onChange={handleChange}
          placeholder={'Search for movie'} />
      </>
    );
  }
}

export default Search;