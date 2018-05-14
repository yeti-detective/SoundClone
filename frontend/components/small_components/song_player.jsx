import React, { Component } from 'react';

export default class SongPlayer extends Component {


  render() {
    return (
      <figure className="song-player">
        <div className="big-ol-play" title="this will be a play button later"></div>
        <div className="big-ol-pause"></div>
        <h1>Controls coming soon</h1>
      </figure>
    );
  }
}








// <audio controls>
//   <source src={this.props.song.file_path} type="audio/mpeg" />
//   <source src={this.props.song.file_path} type="audio/ogg" />
//   Your browser does not support HTML5 audio, what the heck?
// </audio>
// <div className="controls">
//   <div className="play"></div>
// </div>
