import React from 'react';

const UploadAvatar = props => {
  return (
    <form className="upload-avatar" onSubmit={props.handleSubmit}>
      <label>User Image Upload
        <input onChange={props.fileUpload} type="file" />
      </label>
      { this.image_url && "Your Image" }
      <img src={props.imageUrl} />
    </form>
  );
};

export default UploadAvatar;
