import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import SongCard from '../small_components/song_card';

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
          <ul>
            {this.props.songs.map((song) => {
              if (song.user_id == this.props.match.params.userId) {
                return <SongCard getSong={this.newSong} key={song.id} song={song} />;
              }
            })}
          </ul>
        </section>
      </main>
    );
  }
}
