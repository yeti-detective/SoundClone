import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



const UploadSong = (props) => {
  return (
    <form onSubmit={props.handleSubmit}  className="upload-song">
      <label>Song Title
        <input
          className="title-input"
          type="text"
          value={props.songTitle}
          placeholder="track title"
          onChange={props.updateTitle}
          />
      </label>
      <input className="file-upload" type="file" onChange={props.songFileUpoad} />
      <input className="song-submit" type="submit" value="Upload Song" />
    </form>
  );
};

export default UploadSong;
