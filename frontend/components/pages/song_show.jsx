import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserHeaderBar from '../containers/user_header_bar_container';
import listifySliceOfState from '../../util/listify_slice_of_state';
import SongCardIndex from '../containers/song_card_index_container';

export default class SongShow extends Component {
  constructor(props) {
    super(props);
    this.newSong = this.newSong.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getSong(this.props.match.params.songId);
    this.props.getUsersSongs();
    window.scrollTo(0, 0);
  }

  newSong (song) {
    this.props.getSong(song.id);
  }

  render () {
    if (this.props.songs[this.props.thisSongId]) {
      return (
        <main className="app song-show">
          <UserHeaderBar />
          <section
            className="song-banner"
            style={{background: 'linear-gradient(45deg, #959595, #555555)'}}
            >
            <div className="song-info-box">
              <img
                className="song-logo-large"
                src={this.props.songs[this.props.thisSongId].image_url}
                />
              <h1 className="main-song-title">{this.props.songs[this.props.thisSongId].title}</h1>
              {Object.keys(this.props.users).length ? (
                <Link to={"/users/" + this.props.songs[this.props.thisSongId].user_id}>
                  <h3 className="artist-name">{this.props.users[this.props.songs[this.props.thisSongId].user_id].username}</h3>
                </Link>
              ) : null }
            </div>
            </section>
          <section className="song-cousins">
            <h2>More by this user:</h2>
            <SongCardIndex songs={listifySliceOfState(this.props.songs)} />
          </section>
        </main> );
    } else {
      return null;
    }
  }
}
