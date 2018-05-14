import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SongCard = (props) => {

  return (
    <div onClick={() => {props.getSong(props.song);}} className="song-card">
      <Link to={`/users/${props.song.user_id}/${props.song.id}`}>
        <img className="song-icon" src={props.song.image_url} />
        <p>
          {props.song.title}
        </p>
      </Link>
    </div>
  );
};

export default SongCard;
