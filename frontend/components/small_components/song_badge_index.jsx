import React, { Component } from 'react';

export default class SongBadgeIndex extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getSongs();
  }

  render () {
    if (this.props.songs.length > 0) {
      return (
        <section className="song-badge-index">
          {this.props.songs.map((song) => {
            return (
              <div>
                <ul>
                  <li>{song.title}</li>
                  <li><img src={song.image_url} /></li>
                  <li>by: {this.props.users[song.user_id].username}</li>
                </ul>
              </div>
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
