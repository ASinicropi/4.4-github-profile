var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

  if(githubtoken !== undefined){
    $.ajaxSetup({
      headers: {
        'Authorization': 'token ' + githubtoken.token
      }
    });
  }

$.ajax('https://api.github.com/users/ASinicropi').then(displayUserProfile);
$.ajax('https://api.github.con.users/ASinicropi/repos').then(displayUserRepos);
