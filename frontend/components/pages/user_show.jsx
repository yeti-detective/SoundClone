import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';

export default class UserShow extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getUser();
  }

  render () {
    return (
      <main>
        <UserHeaderBar />
        <section
          style={{backgroundImage: this.props.users[this.props.session.id]}}>
          <div className="big_user">
            <img
              className="big_icon"
              src={this.props.users[this.props.session.id].icon_url}
            />
          </div>
        </section>
      </main>
    );
  }
}
