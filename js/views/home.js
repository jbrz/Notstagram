import React from 'react';
import _ from 'underscore';
import imageView from './image';
import editImage from './edit';
import addImage from './add';

export default React.createClass({

  addHomeHandler() {
    this.props.onHomeClick();
  },

  selectImageHandler(id) {
    this.props.selectImage(id);
  },

  addImageHandler() {
    this.props.AddImage();
  },
  
  editImageHandler() {
    this.props.onEditImageClick();
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  processData(data) {
    return (
      <div id={data.objectId} 
        onClick={() => this.selectImageHandler(data.objectId)} className="list imageThumb">
        
        <img className="image" 
        src={data.imageURL}/>
      </div>
    );
  },

  render() {
    return (
      <div className="home wrapper">
        <div className="header">
          <div className="banner">
            <img src="./images/Notstagram.jpg"/>
          </div>

          <nav className="navbar">
            <ul>
              <li onClick={()=> this.addHomeHandler()}><button className="home">Home</button></li>
              <li onClick={()=> this.addImageHandler()}><button className="addImage">Add Image(s)</button></li>
            </ul>
          </nav>
        </div>

        <div className="imageThumbList">{this.props.images.map(this.processData)} 
        </div>
      </div>
    );
  }
});