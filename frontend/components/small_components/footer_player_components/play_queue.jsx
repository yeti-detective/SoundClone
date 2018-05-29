import React from 'react';
import QueueCard from './queue_card';

const PlayQueue = (props) => {
  let cardKeys = 0;
  return (
    <ul className={`play-queue ${props.show ? 'show-queue' : null}`}>
      <h3>Next Up</h3>
      {
        props.queue.map (
          (song) => {
            return (
              <QueueCard
                key={cardKeys++}
                song={props.songs[song]}
                />
            )
          }
        )
      }
    </ul>
  );
};

export default PlayQueue;
