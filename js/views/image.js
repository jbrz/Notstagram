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
      <div className="viewImage" id={this.props.images.objectId}>

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
          <div class="viewImage">
            <img className="imagemage" src={this.props.images.imageURL}/>
            <div class="imageControls">
              <button onClick={() => this.addBackHandler()}>Return to Main</button>
              <button onClick={() => this.editImageHandler()}>Edit Image</button>
            </div>
          </div>

          <div class="imageText">
            
            <div class="title">{this.props.images.iName}
            </div>
            <div class="description">{this.props.images.iDesc}
            </div>
          </div>
        </div>
      </div>
    );
  }

});