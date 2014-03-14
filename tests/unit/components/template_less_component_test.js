import { test , moduleForComponent } from 'testing-ember-nested-resources/tests/helpers/module_for';

moduleForComponent('template-less');

test("template", function(){
  var component = this.subject();
  ok(this.$());
});
