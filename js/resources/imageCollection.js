import Backbone from 'backbone';
import PhotoModel from './newphoto-model';
import {APP_URL} from '../parseData';

let imageCollection = Backbone.Collection.extend({

  url: APP_URL,

  model: imageModel,

  parse(data) {
    return data.results;
  }

});

export default imageCollection;