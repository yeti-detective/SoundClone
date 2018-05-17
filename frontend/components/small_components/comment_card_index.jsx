import React from 'react';

import CommentCard from './comment_card';

const CommentCardIndex = props => {
  return (
    <ul>
      {props.comments.map((comment) => {
        if (comment.song_id === props.song.id) {
          return <CommentCard key={comment.id} author={props.author} comment={comment} />;
        }
      })}
    </ul>
  );
};

export default CommentCardIndex;
