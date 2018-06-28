import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import SongCardIndex from '../small_components/song_card_index';

export default class UserShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="app user-show">
        <UserHeaderBar />
        <section
          className="user-banner"
          style={{
            backgroundImage: `url(${this.props.user.background_image})`
          }}>
          <div className="big_user">
            <img className="big_icon" src={this.props.user.icon_url} />
            <h4>user name</h4>
            <h3>{this.props.user.username}</h3>
          </div>
        </section>
        <section className="user-body">
          <h1>Songs by this user:</h1>
          <SongCardIndex user={this.props.user} songs={this.props.songs} />
        </section>
      </main>
    );
  }
}
