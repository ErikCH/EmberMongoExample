import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {
            var d = this.get('model');
            d.save();
            this.transitionToRoute('quote');
            },
        del: function() {
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('quote');
        }
    }
});
