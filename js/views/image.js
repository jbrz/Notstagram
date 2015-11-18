import React from 'react';

export default React.createClass({

  selectImageHandler(id) {
    this.props.onImageSelect(id);
  },

  addImageHandler() {
    this.props.onAddImage();
  },

  editImageHandler(id) {
    this.props.onEditImage(id);
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  render(data) {
    return (
      <div className="imageView" id={this.props.id}>

        <div className="header">
          <div className="banner">
            <img src="./images/Notstagram.jpg"/>
          </div>
            <nav className="navbar">
              <ul>
               <li onClick={()=> this.addHomeHandler()}><button className="home">Home</button></li>
               <li onClick={()=> this.addImageHandler()}><button className="addImage">Upload Image(s)</button></li>
             </ul>
            </nav>
        </div>

        <div className="imageWrap">
          <div className="viewImage">
            <img className="imagemage" src={this.props.src}/>
            <div className="imageControls">
              <button onClick={() => this.addBackHandler()}>Return to Main</button>
              <button onClick={() => this.editImageHandler(this.props.id)}>Edit Image</button>
            </div>
          </div>

          <div className="imageText">
            
            <div className="title">{this.props.imageName}
            </div>
            <div className="description">{this.props.imageDesc}
            </div>
          </div>
        </div>
      </div>
    );
  }

});