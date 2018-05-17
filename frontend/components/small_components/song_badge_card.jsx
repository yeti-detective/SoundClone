import React from 'react';
import SongPlayer from './song_player';
import SongBadge from './song_badge';
import GetCurrentSongButton from '../containers/get_current_song_button_container';

const SongBadgeCard = (props) => {
  return (
    <figure className="song-card-mid" >
      <SongBadge song={props.song} user={props.user.username} />
      <GetCurrentSongButton song={props.song} />
    </figure>
  );
};

export default SongBadgeCard;
