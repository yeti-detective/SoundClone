import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import SongCardIndex from '../containers/song_card_index_container';

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.newSong = this.newSong.bind(this);
  }

  componentDidMount() {

    this.props.getUser()
      .then(this.props.getUsersSongs());
    window.scrollTo(0, 0);
  }

  newSong (song) {
    this.props.getSong(song.id);
  }

  render () {
    return (
      <main className="app user-show">
        <UserHeaderBar />
        <section
          className="user-banner"
          style={{backgroundImage: `url(${this.props.user.background_image})`}}>
          <div className="big_user">
            <img
              className="big_icon"
              src={this.props.user.icon_url}
            />
          <h3>{this.props.user.username}</h3>
          </div>
        </section>
        <section className="user-body">
          <h1>Songs by this user:</h1>
          <SongCardIndex songs={this.props.songs} />
        </section>
      </main>
    );
  }
}
