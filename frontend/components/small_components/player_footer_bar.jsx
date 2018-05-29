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
      playQueue: [],
      playedQueue: [],
      showQueue: false,
      repeat: false
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.back = this.back.bind(this);
    this.skip = this.skip.bind(this);
    this.getSong = this.getSong.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    this.addCurrentSongToQueue = this.addCurrentSongToQueue.bind(this);
    this.songEnded = this.songEnded.bind(this);
    this.showQueue = this.showQueue.bind(this);
    this.currentSong = this.currentSong.bind(this);
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
    if (this.state.playQueue.indexOf(this.props.currentSong) < 0 && !emptyOb(this.props.currentSong) ) {
      this.addCurrentSongToQueue();
    }
  }

  addCurrentSongToQueue() {
    // if props.currentSong is not already in the song queue, add it
    // UNLESS the LAST song in this.state.playedQueue IS this.props.currentSong
    // SPOILER ALERT somtimes the playedQueue is empty

    // if (
    //   this.state.playQueue.indexOf(this.props.currentSong) === -1 &&
    //   this.state.playQueue.length === 0 ||
    //   this.state.playedQueue[this.state.playedQueue.length - 1] !== this.state.playQueue[0]
    // ) {
    //   const newQueue = Object.assign([], this.state.playQueue);
    //   newQueue.push(this.props.currentSong);
    //   let play = false;
    //   if (newQueue.length === 1) {
    //     play = true;
    //   }
    //   this.setState({
    //     playQueue: newQueue
    //   }, () => {
    //     if (play) {
    //       this.audio.play();
    //     }
    //   });
    // }
  }

  back() {
    if (this.state.playedQueue.length > 0) {
      this.audio.pause();
      const newQueue = Object.assign([], this.state.playQueue);
      const newPlayed = Object.assign([], this.state.playedQueue);
      newQueue.unshift(newPlayed.pop());
      this.setState({
        playQueue: newQueue,
        playedQueue: newPlayed
      }, () => {
        this.audio.currentTime = 0;
        this.audio.play();
      });
    }
    this.props.previousSong()();
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
    if (this.state.playQueue.length) {
      return this.state.playQueue[0].file_path;
    }
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
    if (emptyOb(this.props.currentSong)) {
      return {display: "none"};
    } else {
      return {display: "flex"};
    }
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

  showQueue () {
    this.setState({
      showQueue: !this.state.showQueue
    });
  }

  skip() {
    if (this.state.playQueue.length > 1) {
      const newQueue = Object.assign([], this.state.playQueue);
      const newPlayed = Object.assign([], this.state.playedQueue);
      this.audio.pause();
      newPlayed.push(newQueue.shift());
      this.setState({
        playQueue: newQueue,
        playedQueue: newPlayed
      }, ()=> {
        this.audio.currentTime = 0;
        this.play();
      });
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.props.nextSong()();
  }

  songEnded(e) {
    const newQueue = Object.assign([], this.state.playQueue);
    const newPlayed = Object.assign([], this.state.playedQueue);
    let play = true;
    newPlayed.push(newQueue.shift());
    if (newQueue.length < 1) {
      play = false;
    }
    this.setState({
      playQueue: newQueue,
      playedQueue: newPlayed
    });
    if (play) {
      this.audio.play();
    }
  }

  render () {
    const duration = this.audio ? this.audio.duration : 0;
    const currentTime = this.audio ? this.audio.currentTime : 0;
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
          { this.state.isPlaying ? <button id="pause" onClick={this.pause} />
              :
            <button id="play-button" onClick={this.play} />
          }
          <button id="skip-button" onClick={this.skip}>
            <div className="right-triangle" /><div className="up-bar" />
          </button>
        </ul>
        <nav className="slider">
          {this.getTime(currentTime)}
          <progress value={Math.round(currentTime / duration * 100)} max={100} />
          {this.getTime(duration)}
        </nav>
        <ul onClick={this.showQueue} className="song-info">
          { this.currentSongImage() }
          <PlayQueue show={this.state.showQueue} songs={this.state.playQueue} />

        </ul>
      </footer>
    );
  }
}
