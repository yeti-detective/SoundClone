import React, { Component } from 'react';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      player: document.getElementById('footerPlayer'),
      currentSong: {},
      isPlaying: false
    };
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
    if (this.state.player.duration > 0 && !this.state.player.paused) {
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
    this.state.player.pause();
  }

  play() {
    this.state.player.play();
  }

  render () {
    return (
      <footer className="player-footer-bar">
        <ul id="controls">
          <button id="pause" onClick={this.pause} />
          <button id="play-button" onClick={this.play} />
        </ul>
        <audio id="footerPlayer">
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
