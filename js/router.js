import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import {imageCollection,imageModel} from './resources';
import {HomeView,ViewImage,AddImage,EditImage} from './views'

let Router = Backbone.Router.extend({
  routes: {
    ""              : "home",
    "image/:id"     : "viewImage",
    "addImage"      : "addImage",
    "editImage/:id" : "editImage"
  },

  initialize(appElement) {
    this.el = appElement;
    this.images = new imageCollection();
    let router = this;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true,
      cache: true,
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  home() {
    this.images.fetch().then(() => {
      this.render(<HomeView 
        images={this.images.toJSON()}
        onHomeClick={() => this.goto('')}
        onBackClick={() => this.goto('')}
        selectImage={this.selectImage.bind(this)}
        AddImage={() => this.goto('addImage')}
        onEditImage={() => this.goto('editImage')}/>
      );
    }); 
  },

  selectImage(id) {
    this.images.fetch().then(() => {
      // console.log(id)
      let image = this.images.toJSON().find(item => item.objectId === id);
      this.goto('image/' + id);
      // console.log(this.images)
      // console.log(image)
      this.render(
        <ViewImage
          onHomeClick={() => this.goto('')}
          onBackClick={() => this.goto('')}
          onImageClick={this.selectImage.bind(this)}
          onAddImage={() => this.goto('addImage')}
          onEditImage={this.editImage.bind(this)} 
            // () => this.goto('editImage')
          src={image.imageURL}
          id={image.objectId}
          imageName={image.iName}
          imageDesc={image.iDesc}/>
      )
    });
  },

  addImage() {
    this.render(
      <AddImage
        onHomeClick={() => this.goto('')}
        onBackClick={() => this.goto('')}
        onAddImage={() => this.goto('addImage')}
        onEditImage={() => this.goto('editImage')}
        onSaveImage={
          () => {
            let newImage = new imageModel ({
              iName: $('#newName').val(),
              imageURL: $('#newURL').val(),
              iDesc: $('#newDesc').val(),
            });
            newImage.save().then(()=>{
              this.goto('');
            });
          }
        }/>
    );
  },

  editImage(id) {
    this.images.fetch().then(() => {
      let image = this.images.toJSON().find(item => item.objectId === id);
      this.goto('editImage/' + id);
      this.render(
        <EditImage
          onHomeClick={() => this.goto('')}
          onBackClick={() => this.goto('')}
          onAddImageClick={() => this.goto('addImage')}
          onSaveImage={
            (id) => {
              let editImage = new imageModel ({
                objectId: id,
                iName: $('#newName').val(),
                imageURL: $('#newURL').val(),
                iDesc: $('#newDesc').val(),
              });
              editImage.save().then(()=>{
                this.goto('');
              });
            }
          }/>
      );
    });
  },

  start() {
    Backbone.history.start();
  }

});

export default Router;