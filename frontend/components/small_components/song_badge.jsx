import React from 'react';
import { Link } from 'react-router-dom';
import FaComment from 'react-icons/lib/fa/comment';

const SongBadge = (props) => (
  <figure className="song-badge">
    <Link to={`/users/${props.song.user_id}/${props.song.id}`}>
    <img src={props.song.image_url} />
    <h3>{props.song.title}</h3>
    <h4>{props.user}</h4>
    <FaComment className="comment-icon" />{props.song.comments.length}
    </Link>
  </figure>
);

export default SongBadge;
