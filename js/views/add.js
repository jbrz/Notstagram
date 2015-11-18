import React from 'react';

export default React.createClass({

  saveImageHandler() {
    this.props.onSaveImage();
  },

  addImageHandler() {
    this.props.onAddImage();
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  addHomeHandler() {
    this.props.onHomeClick();
  },

  render(data) {
    return (
      <div className="addImage">

        <div className="header">
          <div className="banner">
            <img src="./images/Notstagram.jpg"/>
          </div>

          <nav className="navbar">
            <ul>
              <li onClick={()=> this.addHomeHandler()}><button className="home">Home</button></li>
              <li onClick={()=> this.addImageHandler()}><button className="addImage">Add New Image(s)</button></li>
            </ul>
          </nav>
        </div>

        <div className="imageWrap">
          <div className="addImageForm">
            <form className="addForm">
              <input type="text" placeholder="Image Title" className="newName"></input>
              <input type="text" placeholder="Image URL" className="newURL"></input>
              <input type="textarea" placeholder="Description:" className="newDesc"></input>
              <div className="saveButtons">
                <button onClick={() => this.addBackHandler()}>Return to Main</button>
                <button onClick={() => this.saveImageHandler()}>Upload Image</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }

});