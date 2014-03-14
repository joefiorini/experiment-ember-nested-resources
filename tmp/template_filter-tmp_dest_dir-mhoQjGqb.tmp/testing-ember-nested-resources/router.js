var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {

  this.resource("post", {path: "/post/:post_id"}, function() {
    this.resource("comments", function() {
      this.route("new");
    });
  });

  this.resource("comments", function() {
    this.route("show", {path: "/:comment_id"});
  });
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
