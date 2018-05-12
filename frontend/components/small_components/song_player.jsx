import React, { Component } from 'react';

const SongPlayer = (props) => {
  return (
    <figure className="song-player">
      <audio controls>
        <source src={props.song.file_path} type="audio/3gp" />
        <source src={props.song.file_path} type="audio/mpeg" />
        <source src={props.song.file_path} type="audio/ogg" />
      </audio>
    </figure>
  );
};

export default SongPlayer;
