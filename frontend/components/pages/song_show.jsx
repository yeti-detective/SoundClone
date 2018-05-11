import React, { Component } from 'react';
import UserHeaderBar from '../containers/user_header_bar_container';
import listifySliceOfState from '../../util/listify_slice_of_state';

export default class SongShow extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getSong();
    this.props.getUsersSongs();
  }

  render () {

    if (this.props.songs[this.props.thisSongId]) {
      return (
        <main className="song-show">
          <UserHeaderBar />
          <section
            className="song-banner"
            style={{background: 'linear-gradient(45deg, #959595, #555555)'}}
            >
            <img src={this.props.songs[this.props.thisSongId].image_url} />
            <h1 className="main-song-title">{this.props.songs[this.props.thisSongId].title}</h1>
            <h3 className="artist-name">{this.props.users[this.props.songs[this.props.thisSongId].user_id].username}</h3>
          </section>
          <section className="song-cousins">
            {listifySliceOfState(this.props.songs).map((song) => {
              return song.id != this.props.thisSongId ? (
                <p>{song.title}</p>
              ) : ( null );
            })}
          </section>
        </main> );
    } else {
      return null;
    }
  }
}
