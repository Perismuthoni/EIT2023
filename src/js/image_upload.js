import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import '../css/image_upload.css'; // Import the CSS file

class ImageUpload extends Component {
  // ... (Previous code)

  render() {
    return (
      <div className="image-upload">
        <h3>Upload Image</h3>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop an image here, or click to select one.</p>
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default ImageUpload;
