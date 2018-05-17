import React from 'react';

const GetCurrentSongButton = props => {
  return (
    <button
      className="play-this-song"
      onClick={() => { props.getCurrentSong(props.song.id); }}
      title="add to currently playing"
      >
      <div className="play" />
    </button>

  );
};

export default GetCurrentSongButton;
