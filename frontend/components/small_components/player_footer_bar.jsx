import React, { Component } from 'react';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      currentSong: {},
      isPlaying: false
    };
    this.audio = React.createRef();

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getSong = this.getSong.bind(this);
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
        <ul id="controls">
          <button id="pause" onClick={this.pause} />
          <button id="play-button" onClick={this.play} />
        </ul>
        <audio id="footerPlayer" ref={this.audio}>
          <source
            src={this.state.currentSong.file_path}
            type="audio/mpeg" />
            <source
              src={this.state.currentSong.file_path}
              type="audio/ogg" />
        </audio>
      </footer>
    );
  }
}
