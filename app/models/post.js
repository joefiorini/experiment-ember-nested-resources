var Model = DS.Model.extend({
  title: DS.attr("string")
});

Model.FIXTURES = [{
  id: 42,
  title: 'blah'
}];

export default Model;
