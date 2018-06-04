import React from 'react';
import SearchResult from './search_result';

const DisplayResults = (props) => {
  let count = 0;
  return (
    <ul className="display-results">
      { props.results.map((res) => (
        <SearchResult key={count++} entity={res} />
      ))}
    </ul>
  )
}

export default DisplayResults;
