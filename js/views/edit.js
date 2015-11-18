import React from 'react';

export default React.createClass({

  saveImageHandler(id) {
    this.props.onSaveImage(id);
  },
  
  addHomeHandler() {
    this.props.onHomeClick();
  },

  addImageHandler() {
    this.props.onAddImage();
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  render(data) {
    return (
      <div className="editImage" id={this.props.id}>

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
          <div className="editImageForm">
            <form className="editForm">
              <input className="pullURL" type="text" value={this.props.imageURL}></input>
              <input className="editTitle" type="text" placeholder="" value={this.props.imageName}></input>
              <textarea className="editDesc" type="text" value={this.props.imageDesc}></textarea>
            </form>

            <div className="saveButtons">
              <button onClick={() => this.addBackHandler()}>Return to Main</button>
              <button onClick={() => this.saveImageHandler(this.props.id)}>Save this Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});