/**
 * User: katat
 * Date: 9/9/13
 * Time: 11:06 AM
 */
var express = require("express");
var engines = require('consolidate');
var _ = require('underscore');
var app = express();
var port = 6565;

app.configure(function(){
    app.use(express.static(__dirname + '/'));
    app.use(express.bodyParser());
    app.set('views', __dirname + '/');
    app.set('view engine', 'handlebars');
    app.set("view options", { layout: false });
    app.engine('.html', engines.handlebars);
})

app.get('/*', function(req, res){
    res.render('index.html');
})


app.listen(port);
console.log("Listening on port " + port);

module.exports = app;