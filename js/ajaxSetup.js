import $ from 'jquery';
import {API_KEY, APP_ID, APP_URL} from './parseData';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': API_KEY,
  }
});