import React, { Component } from 'react';
import SongBadge from './song_badge';

export default class SongBadgeIndex extends Component {
  componentDidMount() {
    this.props.getSongBadges();
  }

  render () {
    let songs;
    if (this.props.songs.length > 0) {
      songs = this.props.songs.sort((a, b) => {
        return b.id - a.id;
      });
      return (
        <section className="song-badge-index">
          {songs.map((song) => {
            return (
              <SongBadge
                key={song.id}
                song={song}
                user={this.props.users[song.user_id].username}
              />
            );
            })}
        </section>
      );
    } else {
      return (
        <p>loading...</p>
      );
    }
  }
}
