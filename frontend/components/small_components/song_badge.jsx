import React from 'react';
import { Link } from 'react-router-dom';
import FaComment from 'react-icons/lib/fa/comment';

const SongBadge = (props) => {
  // TODO: find out why the comments array is coming in double
  const numComments = new Set(props.song.comments);
  return (
    <figure className="song-badge">
      <Link to={`/users/${props.song.user_id}/${props.song.id}`}>
      <img src={props.song.image_url} />
      <h3>{props.song.title}</h3>
      <h4>{props.user}</h4>
      <FaComment className="comment-icon" />{numComments.size}
      </Link>
    </figure>
  );
};

export default SongBadge;
