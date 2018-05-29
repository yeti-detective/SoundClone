import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserHeaderBar from '../containers/user_header_bar_container';
import listifySliceOfState from '../../util/listify_slice_of_state';
import emptyOb from '../../util/empty_ob';
import SongCardIndex from '../containers/song_card_index_container';
import GetCurrentSongButton from '../containers/get_song_button_container';
import CommentCardIndex from '../containers/comment_card_index_container';

export default class SongShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  artistName () {
    return this.props.users[this.props.songs[this.props.thisSongId].user_id].username;
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
              {!emptyOb(this.props.users) ? (
                <Link to={"/users/" + this.props.songs[this.props.thisSongId].user_id}>
                  <h3 className="artist-name">{this.artistName()}</h3>
                </Link>
              ) : null }
              <GetCurrentSongButton song={this.props.songs[this.props.thisSongId]} />
            </div>
            </section>
          <section>
            <h2>More by this user:</h2>
            <section className="song-cousins">
              <SongCardIndex
                user={this.props.users[this.props.songs[this.props.thisSongId].user_id]}
                songs={listifySliceOfState(this.props.songs)}
                />
              <CommentCardIndex
                song={this.props.songs[this.props.match.params.songId]}
                />
            </section>
          </section>
        </main> );
    } else {
      return null;
    }
  }
}
