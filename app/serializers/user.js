import Ember from 'ember';
import DS from 'ember-data';

const {
  getWithDefault
} = Ember;

const {
  RESTSerializer
} = DS;

export default RESTSerializer.extend({
  normalize(modelClass, resourceHash) {
    let links = getWithDefault(resourceHash, 'links', {});

    // FIXME: Can we use the Countries serializer to get this instead of hard
    // coding the path?
    links.countries = '/countries';
    resourceHash.links = links;

    return this._super(modelClass, resourceHash);
  }
});
