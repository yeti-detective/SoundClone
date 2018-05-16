import React from 'react';
import QueueCard from './queue_card';

const PlayQueue = (props) => {

  return (
    <ul className="play-queue">
      <h3>Next Up</h3>
      {
        props.songs.map ((song) => {
          return <QueueCard key={song.id} song={song} />;
        })
      }
    </ul>
  );
};

export default PlayQueue;
