import React from 'react';

const UploadAvatar = props => {
  return (
    <form className="upload-avatar" onSubmit={props.handleSubmit}>
      <div className="little-hugs">
        <label>User Image Upload<br />
        <input onChange={props.fileUpload} type="file" />
        </label><br />
        { props.imageUrl && "Your Image" }
        <br />
        <img src={props.imageUrl} />
      </div>
    </form>
  );
};

export default UploadAvatar;
