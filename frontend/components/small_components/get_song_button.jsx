import React, { Component } from 'react';

export default class GetCurrentSongButton extends Component {
  constructor (props) {
    super(props);

    this.buttClick = this.buttClick.bind(this);
  }

  buttClick () {
    this.props.getSong(this.props.song.id);
    this.props.enqueueSong()(this.props.song.id);
  }

  isPlayingSong () {
    return this.pointerIndex() === this.props.song.id && this.props.playing
  }

  pointerIndex () {
    return this.props.playQueue[this.props.playQueuePointer]
  }

  render () {
    return (
      <button
        className="play-this-song"
        onClick={this.buttClick}
        title="add to currently playing"
        >
          <div className="play" />
      </button>

    );
  }
};
