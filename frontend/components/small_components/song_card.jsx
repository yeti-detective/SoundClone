import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SongCardToolTip from './song_card_tool_tip';

const SongCard = (props) => {

  return (
    <div onClick={() => {props.getSong(props.song);}} className="song-card">
      <SongCardToolTip song={props.song} />
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
