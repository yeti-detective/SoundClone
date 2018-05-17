import React from 'react';

import CommentCard from './comment_card';

const CommentCardIndex = props => {
  return (
    <ul>
      <li><h3>comments</h3></li>
      {props.comments.map((comment) => {
        if (comment.song_id === props.song.id) {
          return (
            <CommentCard
              key={comment.id}
              author={props.users[comment.user_id]}
              comment={comment}
              />
          );
        }
      })}
    </ul>
  );
};

export default CommentCardIndex;
