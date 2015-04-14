import Ember from 'ember';

export default Ember.Controller.extend({
actions: {  
        save: function() {
                var quote = this.get('quote');
                var author= this.get('author');
                var quote = this.store.createRecord('quote', {
                        author:author,
                        quote:quote
                });
                this.set('quote','');
                this.set('author','');
                quote.save();
                this.transitionToRoute('quote');

        }
}
});
