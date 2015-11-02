import Backbone from 'backbone';
import imageModel from './imageModel';
import {APP_URL} from '../parseData';

let imageCollection = Backbone.Collection.extend({

  url: APP_URL,

  model: imageModel,

  parse(data) {
    return data.results;
  }

});

export default imageCollection;