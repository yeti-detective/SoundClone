import React from 'react';
import QueueCard from './queue_card';

const PlayQueue = (props) => {

  return (
    <ul className={`play-queue ${props.show ? 'show-queue' : null}`}>
      <h3>Next Up</h3>
      {
        props.queue.map (
          (song) => (
            <QueueCard
              key={props.songs[song].id || 1}
              song={props.songs[song]}
              />
          )
        )
      }
    </ul>
  );
};

export default PlayQueue;
