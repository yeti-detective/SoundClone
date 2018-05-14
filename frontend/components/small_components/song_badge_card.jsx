import React from 'react';
import SongPlayer from './song_player';
import SongBadge from './song_badge';

const SongBadgeCard = (props) => {
  return (
    <figure className="song-card-mid" >
      <SongBadge song={props.song} user={props.user.username} />
      <SongPlayer song={props.song} />
    </figure>
  );
};

export default SongBadgeCard;
