import React, { Component } from 'react';

export default class SongPlayer extends Component {

  componentDidMount() {
    const songPlayer = document.getElementsByClassName('song-player')[0];
    songPlayer.addEventListener('play', (e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <figure className="song-player">
        <audio controls>
          <source src={this.props.song.file_path} type="audio/mpeg" />
          <source src={this.props.song.file_path} type="audio/ogg" />
          Your browser does not support HTML5 audio, what the heck?
        </audio>
        <div className="controls">
          <div className="play"></div>
        </div>
      </figure>
    );
  }
}
