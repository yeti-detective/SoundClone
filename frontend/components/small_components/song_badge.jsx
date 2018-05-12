import React from 'react';
import { Link } from 'react-router-dom';

const SongBadge = (props) => (
  <figure className="song-badge">
    <img src={props.song.image_url} />
    <h3>{props.song.title}</h3>
    <h4>{props.user}</h4>
  </figure>
);

export default SongBadge;
