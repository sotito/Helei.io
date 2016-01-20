'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  etitle: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  econtent: {
    type: String,
    default: '',
    trim: true
  },
  ecategory:{
    type: String,
    default: ''
  },
  elocation:{
    type: String,
    default: ''
  },
  elocationlat:{
    type: Number,
    default: 0,
    trim: true
  },
  elocationlng:{
    type: Number,
    default: 0,
    trim: true
  },
  dt: {
    type: Date
  },
  edt: {
    type: Date,
    expires: '1s'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }

});

mongoose.model('Article', ArticleSchema);
