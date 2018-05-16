import React from 'react';
import QueueCard from './queue_card';

const PlayQueue = (props) => {
  const cards = props.songs.reverse().map ((song) => {
      return <QueueCard key={song.id} song={song} />;
    });
  return (
    <ul className="play-queue">
      { cards }
    </ul>
  );
};

export default PlayQueue;
