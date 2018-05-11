import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import UserIndexCard from '../small_components/user_index_card';

export default class Stream extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let users = null;
    if (this.props.users.length > 1) {
      users = this.props.users.map((user) => {
        return (<UserIndexCard key={user.id} user={user} />);
      });
    }
    return (
      <div>
        <UserHeaderBar />
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}
