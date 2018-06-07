import React, { Component } from 'react';
import emptyOb from '../../util/empty_ob';
import PlayQueue from './footer_player_components/play_queue';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      duration: 0.0,
      playedQueue: [],
      showQueue: false,
      repeat: false
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.back = this.back.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.currentTime = this.currentTime.bind(this);
    this.skip = this.skip.bind(this);
    this.getSong = this.getSong.bind(this);
    this.songEnded = this.songEnded.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.currentSong = this.currentSong.bind(this);
  }

  componentDidMount() {
    if ( this.props.users[this.currentSong.user_id] === undefined ) {
      this.props.getUser(this.currentSong.user_id);
    }
  }

  componentDidUpdate() {
    if (this.props.playQueue.indexOf(this.currentSong) < 0 && !emptyOb(this.currentSong) ) {
      this.addCurrentSongToQueue();
    }
    if (this.props.playing) {
      if (!this.isPlaying()) {
        this.audio.play();
        this.checkTime()
      }
    } else {
      if (this.isPlaying()) {
        this.audio.pause();
      }
    }
  }

  back() {
    if (
      this.props.playQueue.length &&
      this.props.pointer > 0
    ) {
        this.audio.pause();
        this.props.previousSong()();
        this.audio.currentTime = 0;
        fetch(this.audio.src)
          .then(() => {
            this.audio.play()
          })
      }
  }

  checkTime () {
    setTimeout(() => {
      this.currentTime();
    }, 32)
  }

  currentSong () {
    return this.props.songs[this.props.playQueue[this.props.pointer]] || {};
  }

  currentSongImage () {
    if (this.props.playQueue.length) {
      const song = this.currentSong();
      return (
        <div className="song-info">
          <img src={song.image_url} />
          <p className="title">{song.title}</p>
          <p className="artist">{this.props.users[song.user_id].username}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  currentSongFilePath () {
    if (this.props.playQueue.length) {
      return this.currentSong().file_path;
    }
  }

  currentTime () {
    let timeState = {
      currentTime: this.audio.currentTime
    }
    if (this.audio.duration !== this.state.duration) {
      timeState = Object.assign({}, timeState, { duration: this.audio.duration })
    }
    this.setState(
      timeState,
      () => {
      if (this.props.playing) {
        this.checkTime();
      }
    })
  }

  getSong(song) {
    this.setState({
      currentSong: song
    });
  }

  getTime(seconds) {
    if (isNaN(seconds)) {
      return "00:00:00";
    }
    let time = new Date(null);
    time.setSeconds(seconds);
    return time.toISOString().substr(11, 8);
  }

  hide() {
    if (emptyOb(this.currentSong())) {
      return {display: "none"};
    } else {
      return {display: "flex"};
    }
  }

  isPlaying() {
    if (this.audio.duration > 0 && !this.audio.paused) {
      return true;
    } else {
      return false
    }
  }

  pause () {
    if (this.props.playing) {
      this.props.togglePlaying();
    }
  }

  play() {
    if (!this.props.playing) {
      this.props.togglePlaying()
    }
    this.checkTime();
  }

  showQueue () {
    this.setState({
      showQueue: !this.state.showQueue
    });
  }

  skip() {
    if (
      this.props.playQueue.length &&
      this.props.pointer < this.props.playQueue.length - 1
    ) {
      this.audio.pause();
      this.props.nextSong()();
      this.audio.currentTime = 0;
      fetch(this.audio.src)
        .then(() => {
          this.audio.play()
        })
    }
  }

  songEnded(e) {
    if (this.props.pointer < this.props.playQueue.length) {
      this.skip();
    }
  }

  render () {
    const song = this.currentSong();
    return (
      <footer className="player-footer-bar" style={this.hide()}>
        <audio
          src={song.file_path}
          ref={(el) => { this.audio = el; }}
          onEnded={this.songEnded}
        />
        <ul id="controls">
          <button id="back-button" onClick={this.back}>
            <div className="up-bar" /><div className="left-triangle" />
          </button>
          { this.props.playing ? <button id="pause" onClick={this.pause} />
              :
            <button id="play-button" onClick={this.play} />
          }
          <button id="skip-button" onClick={this.skip}>
            <div className="right-triangle" /><div className="up-bar" />
          </button>
        </ul>
        <nav className="slider">
          {this.getTime(this.state.currentTime)}
          <progress value={Math.round(this.state.currentTime / this.state.duration * 100)} max={100} />
          {this.getTime(this.state.duration)}
        </nav>
        <ul onClick={this.showQueue} className="song-info">
          { this.currentSongImage() }
          <PlayQueue
            show={this.state.showQueue}
            songs={this.props.songs}
            queue={this.props.playQueue}
            />

        </ul>
      </footer>
    );
  }
}
