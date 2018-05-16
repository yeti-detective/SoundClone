import React from 'react';
import { Link } from 'react-router-dom';

const SongCardToolTip = props => (
  <div className="tooltip">
    <button>Add To Currently Playing</button>
    <Link to={`/users/${props.song.user_id}/${props.song.id}`}>Go to Page</Link>
  </div>
);

export default SongCardToolTip;
