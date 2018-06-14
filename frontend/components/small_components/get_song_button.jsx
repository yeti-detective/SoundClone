import React, { Component } from 'react';

export default class GetCurrentSongButton extends Component {
  constructor (props) {
    super(props);

    this.buttClick = this.buttClick.bind(this);
  }

  buttClick (e) {
    e.stopPropagation();
    switch (this.className()) {
      case "play":
      case "pause":
         this.props.togglePlaying();
        break;
      case "add":
        this.props.getSong(this.props.song.id);
        this.props.enqueueSong()(this.props.song.id);
        break;
      default:
        return null
    }
  }

  className () {
    if (
      this.props.playQueue[this.props.pointer] == this.props.song.id &&
      this.props.playing
    ) {
      return "pause"
    } else if (
      this.props.playQueue[this.props.pointer] == this.props.song.id &&
      !this.props.playing
    ) {
      return "play"
    } else {
      return "add"
    }
  }

  isPlayingSong () {
    return this.pointerIndex() === this.props.song.id && this.props.playing
  }

  pointerIndex () {
    return this.props.playQueue[this.props.playQueuePointer]
  }

  songAdded () {

  }

  render () {
    return (
      <button
        className="play-this-song"
        onClick={this.buttClick}
        title="add to currently playing"
        >
          <div className={this.className()} />
      </button>

    );
  }
};
