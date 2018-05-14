import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserHeaderBar from '../containers/user_header_bar_container';
import listifySliceOfState from '../../util/listify_slice_of_state';
import SongCard from '../small_components/song_card';
import SongPlayer from '../small_components/song_player';

export default class SongShow extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getSong();
    this.props.getUsersSongs();
    window.scrollTo(0, 0);
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
            <SongPlayer song={this.props.songs[this.props.thisSongId]} />
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
            {listifySliceOfState(this.props.songs).map((song) => {
              return song.id != this.props.thisSongId ? (
                <SongCard key={song.id} song={song} />
              ) : ( null );
            })}
          </section>
        </main> );
    } else {
      return null;
    }
  }
}
