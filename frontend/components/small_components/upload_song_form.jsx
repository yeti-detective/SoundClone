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
        <label className="smaller">Upload Song<br />
          <input className="song-upload" type="file" onChange={props.songFileUpoad} />
        </label>
        <br />
        <label className="smaller">Upload Song Image<br />
          <input className="song-icon-upload" type="file"
            onChange={props.songImageUpload} /><br />
        </label>
        <img className="preview-image" src={props.songImageUrl} /><br />
        <input className="song-submit" type="submit" value="Upload Song" />
      </div>
    </form>
  );
};

export default UploadSong;
