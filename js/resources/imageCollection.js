import Backbone from 'backbone';
import imageModel from './imageModel.js';
import {APP_URL} from '../parseData.js';

let imageCollection = Backbone.Collection.extend({

  url: APP_URL,

  model: imageModel,

  parse(data) {
    return data.results;
  }

});

export default imageCollection;