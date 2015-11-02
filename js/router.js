import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import {imageCollection,imageModel} from './resources';
import {homeView,imageView,addImage,editImage} from './views'

export default Backbone.Router.extend({
  routes: {
    ""              : "home",
    "image/:id"     : "viewImage",
    "addImage"      : "addImage",
    "editImage/:id" : "editImage"
  };

  initialize(appElement) {
    this.el = appElement;
    this.image = new imageCollection();
    let router = this;
  };

    goto(route) {
    this.navigate(route, {trigger: true});
  };

  render(component) {
    ReactDom.render(component, this.el);
  };

  home() {
    this.image.fetch().then(() => {
      this.render(<homeView 
        images={this.image.toJSON()}
        onBackClick={() => this.goto('')}
        onImageClick={this.selectImage.bind(this)}
        onAddImage={() => this.goto('addImage')}/>
        onEditImage={() => this.goto('editImage')}/>
      );
    }); 
  };

  clickImage(id) {
    let image = this.photos.toJSON().find(item => item.objectId == id);
    this.navigate('Images/' + id, {trigger: true});

    this.render(
      <ImagePage
        onHomeClick={() => this.goto('')};
        onBackClick={() => this.goto('')};
        onImageClick={this.selectImage.bind(this)} 
        onAddImage={() => this.goto('addImage')}
        onEditImage={() => this.goto('editImage')}
        src={image.imageURL}
        imageName={image.iName}
        imageDesc={image.iDesc}/>
    )
  };

  drawImage(id){
    let image = this.images.toJSON().find(imgID => image.objectId === id);

    ReactDom.render(<viewImage src={image.imageURL}/>, this.el);
  };

  addImage() {
    this.render(<addImage
      onHomeClick={() => this.goto('')}
      onBackClick={() => this.goto('')}
      onAddImage={() => this.goto('addImage')}
      onEditImage={() => this.goto('editImage')}
      onSaveImage={() => {
          $('#save').click(function() {
            let newImage = new imageModel ({
              iName: $('#newName').val(),
              imageURL: $('#newURL').val(),
              iDesc: $('#newDesc').val(),
            });
            newImage.save();
          });
        };
        this.goto('');
      }/>
    )
  };

  editImage(id) {
    this.render(
      <EditImage
      onHomeClick={() => this.goto('')}
      onBackClick={() => this.goto('')}
      onAddImage={() => this.goto('addImage')}
      onEditImage={() => this.goto('editImage')}
      let image = this.photos.toJSON().find(item => item.objectId == id);
      onSaveEdit={() => {
          $('#edit').click(function() {
            let editImage = new imageModel ({
              objectId: item.objectId,
              iName: $('#newName').val(),
              imageURL: $('#newURL').val(),
              iDesc: $('#newDesc').val(),
            });
            newImage.save();
          });
        };
        this.goto('');
      }/>
    );
  },

};