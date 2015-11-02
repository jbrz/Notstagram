import React from 'react';
import _ from 'underscore';
import imageView from './image';
import editImage from './edit';
import addImage from './add';

export default React.createClass({


  selectImageHandler(id) {
    this.props.onImageSelect(id);
  },

  addImageHandler() {
    this.props.onAddImage();
  },
  
  editImageHandler() {
    this.props.onEditImage();
  },

  processData(data) {
    return (
      <div id={data.objectId} 
        onClick={() => this.selectImageHandler(data.objectId)} className="list home">
        
        <img className="image" 
        src={data.imageURL}/>
      </div>
    );
  },

  addHomeHandler() {
    this.props.onHomeClick();
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  render() {
    return (
      <div class="home wrapper">

        <div class="header">
          <div class="banner">
            <img src="./images/Notstagram.jpg"/>
          </div>

          <nav class="navbar">
            <ul>
              <li onClick={()=> this.addHomeHandler()}><button class="home">Home</button></li>
              <li onClick={()=> this.addImageHandler()}><button class="addImage">Upload Image(s)</button></li>
            </ul>
          </nav>
        </div>

        <div class="imageTiles">{this.props.images.map(this.processData)} 
        </div>
      </div>
    );
  }
});