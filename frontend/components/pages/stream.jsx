import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
// import UserIndexCard from '../small_components/user_index_card';
import SongBadgeCard from '../small_components/song_badge_card';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.onHover = this.onHover.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getSongs();

    window.scrollTo(0, 0);
  }

  onHover(e) {
    console.log(e);
  }

  render() {
    let songs;
    if (this.props.songs.length > 1) {
      songs = this.props.songs.sort((a, b) => { return b.id - a.id; });
      songs = songs.map((song) => {
        return (
          <SongBadgeCard
            key={song.id}
            user={this.props.users[song.user_id]}
            song={song}
            />
        );
      });
    }
    return (
      <div className="app">
        <UserHeaderBar />
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}
