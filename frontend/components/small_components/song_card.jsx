import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = (props) => {
  return (
    <div className="song-card">
      <img className="song-icon" src={props.song.image_url} />
      <p>
        <Link to={`/${props.song.user_id}/${props.song.id}`}>
        {props.song.title}
        </Link>
      </p>
    </div>
  );
};

export default SongCard;
