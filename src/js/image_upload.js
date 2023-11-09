import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import '../css/image_upload.css';
import profile_icon from '../images/profileimg.png';


class ImageUpload extends Component {


  render() {
    return (
      <div className="image-upload">
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <div className="round-icon">
                <img src={profile_icon} alt='profile_picture'/>
                <i className="fas fa-camera"></i>
              </div>
              <br />
              <button>Change Picture </button>

              <button>Remove Picture </button>
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default ImageUpload;
