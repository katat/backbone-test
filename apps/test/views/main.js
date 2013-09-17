define([
  'backbone',
  'handlebars',
  'text!apps/test/templates/main.html'
], function (Backbone, Handlebars, tpl) {
  var MainView = Backbone.View.extend({
      template: Handlebars.compile(tpl),
      render: function () {
        this.$el.html(this.template({}));
        return this;
      }
    });
  return MainView;
});