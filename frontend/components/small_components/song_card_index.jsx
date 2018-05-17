import React from 'react';
import SongCard from './song_card';

const SongCardIndex = props => {
  return (
    <div className="song-card-index">
      {props.songs.map((song) => {
        if (!song.id) {
          song.id = 1;
        }
        return <SongCard key={song.id} song={song} getCurrentSong={props.getCurrentSong} />;
      })}
    </div>
  );
};

export default SongCardIndex;
