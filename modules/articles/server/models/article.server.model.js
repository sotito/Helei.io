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
  created: {
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
  edate:{
    type: Date,
    default: ''
  },
  elocation:{
    type: String,
    default: ''
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
