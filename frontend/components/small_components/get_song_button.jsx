import React, { Component } from 'react';

export default class GetCurrentSongButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toolTip: 'tool-tip'
    }
    this.buttClick = this.buttClick.bind(this);
    this.songAdded = this.songAdded.bind(this);
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
        this.songAdded();
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
    if (this.className() === 'add') {
      this.setState({
        toolTip: 'tool-tip show-added'
      },() => {
        setTimeout(() => {
          this.setState({
            toolTip: 'tool-tip show-added show-added-fadeout'
          }, setTimeout(() => {
            this.setState({
              toolTip: 'tool-tip'
            })
          }, 1500))
        }, 1500)
      })
    }
  }

  render () {
    return (
      <button
        className="play-this-song"
        onClick={this.buttClick}
        title="add to currently playing"
        >
          <div className={this.className()} />
          <div className={this.state.toolTip}>
            Song Added
          </div>
      </button>

    );
  }
};
