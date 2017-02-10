import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  store: inject.service(),

  model() {
    return this.get('store').findRecord('user', 1);
  }
});
