import React from 'react';

const SongCard = (props) => {
  return (
    <div className="song-card">
      <img className="song-icon" src={props.song.image_url} />
      <p>{props.song.title}</p>
    </div>
  );
};

export default SongCard;
