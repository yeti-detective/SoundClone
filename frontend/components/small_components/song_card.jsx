import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaComment from 'react-icons/lib/fa/comment';
import GetCurrentSongButton from '../containers/get_current_song_button_container';

const SongCard = (props) => {
  let numComments = null;
  if (props.song.comments) {
    numComments = props.song.comments.length;
  }
  return (
    <div className="song-card" onClick={() => { props.getSong(props.song.id); }}>
      <Link
        className="song-card-link"
         to={`/users/${props.song.user_id}/${props.song.id}`}
         >
        <GetCurrentSongButton
          song={props.song}
          />
        <img className="song-icon" src={props.song.image_url} />
        <p>
          {props.song.title}
        </p>
        <FaComment />{numComments}
      </Link>
    </div>
  );
};

export default SongCard;
