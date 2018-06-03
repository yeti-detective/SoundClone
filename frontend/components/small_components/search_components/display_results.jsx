import React from 'react';
import SearchResult from './search_result';

const DisplayResults = (props) => (
  <ul className="display-results">
    { props.results.map((res) => (
      <SearchResult entitiy={res} />
    ))}
  </ul>
)

export default DisplayResults;
