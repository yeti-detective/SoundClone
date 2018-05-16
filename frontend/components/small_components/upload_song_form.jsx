import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



const UploadSong = (props) => {
  return (
    <form onSubmit={props.handleSubmit}  className="upload-song">
      <div className="little-hugs">
        <label>Song Title<br />
        <input
          className="title-input"
          type="text"
          value={props.songTitle}
          placeholder="track title"
          onChange={props.updateTitle}
          /><br />
        </label>
        <input className="file-upload" type="file" onChange={props.songFileUpoad} />
        <br />
        <input className="song-submit" type="submit" value="Upload Song" />
      </div>
    </form>
  );
};

export default UploadSong;
