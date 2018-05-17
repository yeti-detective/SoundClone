import React from 'react';
import SongCard from './song_card';

const SongCardIndex = props => {
  return (
    <div className="song-card-index">
      {props.songs.map((song) => {
        return <SongCard key={song.id || 1} song={song} />;
      })}
    </div>
  );
};

export default SongCardIndex;
