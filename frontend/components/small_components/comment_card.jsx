import React from 'react';

const CommentCard = props => {
  return (
    <article>
      <p>{props.comment.body}</p>
      <h4>{props.comment.author}</h4>
    </article>
  );
};

export default CommentCard;
