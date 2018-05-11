import React from 'react';
import { Link } from 'react-router-dom';

const UserIndexCard = (props) => {
  return (
    <li className="user-index-card">
      <img
        className="user-icon-small"
        src={props.user.icon_url}
      />
    <h4><Link to={`/${props.user.id}`}>{props.user.username}</Link></h4>
    </li>
  );
};

export default UserIndexCard;
