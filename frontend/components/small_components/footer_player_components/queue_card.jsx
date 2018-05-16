import React from 'react';
import { Link } from 'react-router-dom';

const QueueCard = (props) => {
  return (
    <Link to={`/users/${props.song.user_id}/${props.song.id}`}>
      <li>{props.song.title}</li>
    </Link>
  );
};

export default QueueCard;
