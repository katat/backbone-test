define(['backbone', 'apps/test/models', 'handlebars', 'text!apps/test/templates/condition.html', 'bootstrap'], 
	function(Backbone, Models, Handlebars, tpl){
	var ConditionView = Backbone.View.extend({
		template : Handlebars.compile(tpl),
		render : function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.find('#accordion').collapse();
			return this;
		}
	});
	return ConditionView;
})