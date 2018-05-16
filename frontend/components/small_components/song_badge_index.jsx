import React, { Component } from 'react';
import SongBadge from './song_badge';

export default class SongBadgeIndex extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getSongs();
  }

  render () {
    if (this.props.songs.length > 0) {
      const songs = this.props.songs.sort((a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        return bDate > aDate;
      });
      return (
        <section className="song-badge-index">
          {this.props.songs.map((song) => {
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
