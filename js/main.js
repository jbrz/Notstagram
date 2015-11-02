import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import React from 'react';
import ReactDom from 'react-dom';
import './ajaxSetup';
import Router from './router';

let element = document.querySelector('.app');

var router = new Router(element);
router.start();

window.router = router;