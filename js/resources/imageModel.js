import Backbone from 'Backbone';
import {APP_URL} from '../parseData';

let imageModel = Backbone.Model.extend({

  urlRoot: APP_URL,
  idAttribute: 'objectId',
  templateData() {
    let data = this.toJSON();
    return data;
  },
});

export default imageModel;