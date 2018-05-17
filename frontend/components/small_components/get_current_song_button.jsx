import React from 'react';

const GetCurrentSongButton = props => {
  return (
    <button
      className="play-this-song"
      onClick={() => { props.getCurrentSong(props.song.id); }}
      >
      <div className="play" />
    </button>

  );
};

export default GetCurrentSongButton;
