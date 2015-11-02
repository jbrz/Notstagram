import React from 'react';

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

  addBackHandler() {
    this.props.onBackClick();
  },

  render(data) {
    return (
      <div class="viewImage" id={this.props.images.objectId}>

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
          <div class="addImageForm">
            <form class="addImage">
              <input type="text" placeholder="Image Title" class="newName"></input>
              <input type="text" placeholder="Image URL" class="newURL"></input>
              <textarea type="text" placeholder="Description:" class="newDesc"></textarea>
            </form>

            <div className="saveButtons">
              <button onClick={() => this.addBackHandler()}>Return to Main</button>
              <button onClick={() => this.addImageHandler()}>Upload Image</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});