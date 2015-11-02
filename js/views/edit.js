import React from 'react';

let editImage = React.createClass({

  selectImageHandler(id) {
    this.props.onImageSelect(id);
  },

  saveImageHandler() {
    this.props.onAddImage();
  },

  editImageHandler() {
    this.props.onEditImage();
  }

  addBackHandler() {
    this.props.onBackClick();
  },

  render(data) {
    return (
      <div class="editImage" id={this.props.images.objectId}>

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

        <div class="imageWrap">
          <div class="editImage">
            <form class="editForm">
              <input class="pullID" type="text" placeholder="{this.props.images.objectId}">{this.props.images.objectId}</input>
              <input class="pullURL" type="text">{this.props.images.imageURL}</input>
              <input class="editTitle" type="text" placeholder="">{this.props.images.iName}</input>
              <textarea class="editDesc" type="text" placeholder="{this.props.images.iDesc}">{this.props.images.iDesc}</textarea>
            </form>

            <div class="saveButtons">
              <button onClick={() => this.addBackHandler()}>Return to Main</button>
              <button onClick={() => this.editImageHandler()}>Edit Image</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default editImage;