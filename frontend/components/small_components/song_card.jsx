import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SongCardToolTip from './song_card_tool_tip';

const SongCard = (props) => {

  return (
    <div className="song-card">
      <Link
        className="song-card-link"
         to={`/users/${props.song.user_id}/${props.song.id}`}
         >
        <SongCardToolTip
          getCurrentSong={props.getCurrentSong}
          song={props.song}
          />
        <img className="song-icon" src={props.song.image_url} />
        <p>
          {props.song.title}
        </p>
      </Link>
    </div>
  );
};

export default SongCard;
