import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      duration: 0.0,
      isPlaying: false
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getSong = this.getSong.bind(this);
  }

  componentDidMount() {
    if ( this.props.users[this.props.currentSong.user_id] === undefined ) {
      this.props.getUser(this.props.currentSong.user_id);
    }

  }

  getSong(song) {
    this.setState({
      currentSong: song
    });
  }

  isPlaying() {
    if (this.audio.duration > 0 && !this.audio.paused) {
      this.setState({
        isPlaying: true
      });
    } else {
      this.setState({
        isPlaying: false
      });
    }
  }

  pause () {
    this.audio.pause();
  }

  play() {
    this.audio.play();
  }

  render () {
    return (
      <footer className="player-footer-bar">
        <audio
          src={this.props.currentSong.file_path}
          ref={(el) => { this.audio = el; }}
        />
        <ul id="controls">
          <button id="back-button" onClick={this.back}>
            <div className="up-bar" /><div className="left-triangle" />
          </button>
          <button id="pause" onClick={this.pause} />
          <button id="play-button" onClick={this.play} />
          <button id="skip-button" onClick={this.skip}>
            <div className="right-triangle" /><div className="up-bar" />
          </button>
          <nav className="slider">
            <progress value={50} max={100} />
          </nav>
        </ul>
        <ul className="song-info">
          <img src={this.props.currentSong.image_url} />
          <p className="title">{this.props.currentSong.title}</p>
          <p className="artist">{
              this.props.users[this.props.currentSong.user_id] ?
              this.props.users[this.props.currentSong.user_id].username :
              ''
            }</p>
        </ul>
      </footer>
    );
  }
}
