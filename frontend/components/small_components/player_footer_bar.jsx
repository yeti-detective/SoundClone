import React, { Component } from 'react';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      player: document.getElementById('footerPlayer'),
      currentSong: {}
    };
    this.play = this.play.bind(this);
    this.getSong = this.getSong.bind(this);
  }

  play() {
    this.state.player.play();
  }

  getSong(song) {
    this.setState({
      currentSong: song
    });
  }

  render () {
    return (
      <footer className="player-footer-bar">
        <button onClick={this.play}><div id="playButton"/></button>
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
