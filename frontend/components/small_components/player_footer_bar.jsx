import React, { Component } from 'react';
import emptyOb from '../../util/empty_ob';
import PlayQueue from './footer_player_components/play_queue';

export default class PlayerFooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      duration: 0.0,
      isPlaying: false,
      playQueue: [this.props.currentSong],
      playedQueue: [],

    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getSong = this.getSong.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    this.addCurrentSongToQueue = this.addCurrentSongToQueue.bind(this);
    this.songEnded = this.songEnded.bind(this);
    // debugger
  }

  componentDidMount() {
    if ( this.props.users[this.props.currentSong.user_id] === undefined ) {
      this.props.getUser(this.props.currentSong.user_id);
    }
    setInterval(() => {
      this.isPlaying();
    }, 32);
  }

  componentDidUpdate() {
    if (this.state.playQueue.indexOf(this.props.currentSong) < 0 ) {
      this.addCurrentSongToQueue();
    }
  }

  addCurrentSongToQueue() {
    let newQueue = Object.assign([], this.state.playQueue);
    if (emptyOb(newQueue[0])) {
      newQueue.shift();
    }
    newQueue.push(this.props.currentSong);
    this.setState({
      playQueue: newQueue
    });
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
    this.setState({
      isPlaying: false
    });
  }

  play() {
    this.audio.play();
    this.setState({
      isPlaying: true
    });
  }

  songEnded(e) {
    const newQueue = Object.assign([], this.state.playQueue);
    const newPlayed = Object.assign([], this.state.playedQueue);
    newPlayed.push(newQueue.shift());
    this.setState({
      playQueue: newQueue,
      playedQueue: newPlayed
    });
    this.audio.play();
  }

  render () {
    const duration = this.audio ? this.audio.duration : 0;
    const currentTime = this.audio ? this.audio.currentTime : 0;
    return (
      <footer className="player-footer-bar">
        <audio
          src={this.state.playQueue[0].file_path}
          ref={(el) => { this.audio = el; }}
          onEnded={this.songEnded}
        />
        <ul id="controls">
          <button id="back-button" onClick={this.back}>
            <div className="up-bar" /><div className="left-triangle" />
          </button>
          { this.state.isPlaying ? <button id="pause" onClick={this.pause} />
              :
            <button id="play-button" onClick={this.play} />
          }
          <button id="skip-button" onClick={this.skip}>
            <div className="right-triangle" /><div className="up-bar" />
          </button>
        </ul>
        <nav className="slider">
          {Math.round(currentTime * 100) / 100}
          <progress value={Math.round(currentTime / duration * 100)} max={100} />
          {Math.round(duration * 100) / 100}
        </nav>
        <ul className="song-info">
          <PlayQueue songs={this.state.playQueue} />
          <img src={this.state.playQueue[0].image_url} />
          <p className="title">{this.state.playQueue[0].title}</p>
          <p className="artist">{
              this.props.users[this.state.playQueue[0].user_id] ?
              this.props.users[this.state.playQueue[0].user_id].username :
              ''
            }</p>
        </ul>
      </footer>
    );
  }
}
