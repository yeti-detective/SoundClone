import React from 'react';

const SearchResult = (props) => (
  <li className="search-result">
    <a href={props.url}>
      <img src={props.img_url} />
      <p>{props.name}</p>
    </a>
  </li>
)
