import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('erik');
  this.resource('quote', function() {
    this.route('edit', {
        path: ":quote_id"
    }); 
  });
});
