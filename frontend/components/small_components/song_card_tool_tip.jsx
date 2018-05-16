import React from 'react';

const SongCardToolTip = props => (
  <div className="tooltip">
    <button
      onClick={() => { props.getCurrentSong(props.song.id); }}>
      Add To Currently Playing
    </button>
  </div>
);

export default SongCardToolTip;
