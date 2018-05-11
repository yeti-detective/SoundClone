import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import SongCard from '../small_components/song_card';

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
          <ul>
            {this.props.songs.map((song) => {
              return <SongCard song={song} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}
