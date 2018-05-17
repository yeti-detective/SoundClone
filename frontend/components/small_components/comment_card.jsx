import React from 'react';
import { Link } from 'react-router-dom';

const CommentCard = props => {
  return (
    <li>
      <p>{props.comment.body}</p>
      <Link to={`/users/${props.author.id}`}>
        <h4>{props.author.username}</h4>
      </Link>
    </li>
  );
};

export default CommentCard;
