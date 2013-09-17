// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	// baseUrl: 'lib/opensource',
	// baseUrl: '/',
	waitSeconds: 200,
	shim : {
		underscore : {
			exports : '_'
		},
		jquery : {
			exports : '$'
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
        handlebars:{
            exports : 'Handlebars'
        },
        bootstrap : {
            deps : ['jquery']
        }
	},
	paths : {
		jquery : 'lib/jquery',
        bootstrap : 'lib/bootstrap/dist/js/bootstrap',
		underscore : 'lib/underscore',
		backbone : 'lib/backbone',
		text : 'lib/text',
        'handlebars' : 'lib/handlebars',
	}
});
require([ 'backbone', 'jquery', 'handlebars', 'apps/test/models', 'apps/test/views/condition'],
    function(Backbone, $, Handlebars, Models, ConditionView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
            "/slug/" : "showConditionView"
		},
        initialize: function(){
            this.bind('all', this.changeRoute);
            
        },
        changeRoute: function(){

        },
        showConditionView : function(){
            var models = new Models();
            models.fetch({success : function(){
                console.log(models.toJSON());
                var conditionView = new ConditionView({model: models});
                $('body').html(conditionView.render().el);
            }})
        }
	});

	var app = new AppRouter();
	Backbone.history.start();
    Backbone.app = app;
});
