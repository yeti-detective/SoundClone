import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => (
  <li className={`search-result ${props.entity.type}`}>
    <Link to={props.entity.url}>
      <img src={props.entity.img_url} />
      <p>{props.entity.name}</p>
    </Link>
  </li>
)

export default SearchResult;
