import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';

export default class UserShow extends Component {

  componentDidMount() {
    this.props.getUser()
      .then(this.props.getUsersSongs());
  }

  render () {
    return (
      <main>
        <UserHeaderBar />
        <section
          style={{backgroundImage: `url(${this.props.user.background_image})`}}>
          <div className="big_user">
            <img
              className="big_icon"
              src={this.props.user.icon_url}
            />
          <h3>{this.props.user.username}</h3>
          </div>
        </section>
      </main>
    );
  }
}
