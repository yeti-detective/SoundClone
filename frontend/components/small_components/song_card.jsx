import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = (props) => {
  return (
    <div className="song-card">
      <Link to={`/${props.song.user_id}/${props.song.id}`}>
        <img className="song-icon" src={props.song.image_url} />
        <p>
          {props.song.title}
        </p>
      </Link>
    </div>
  );
};

export default SongCard;
