import Ember from 'ember';

const {
  Controller,
  computed: { readOnly }
} = Ember;

export default Controller.extend({
  user: readOnly('model')
});
