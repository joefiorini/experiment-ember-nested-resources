var Model = DS.Model.extend({
  body: DS.attr('string')
});

Model.FIXTURES = [{
  id: 1,
  body: 'blah'
}];

export default Model;
