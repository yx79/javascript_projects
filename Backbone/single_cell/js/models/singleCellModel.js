// Namespace our app
var app = app || {};


app.singleCell = Backbone.Model.extend({
	defaults: {
		color: "none",
		shape: "unknown",
		img: "images/placeholder.jpg"
	}

	// initialize: function() {
	// 	console.log("A model isntance named " + this.get("name") + " has been created.");

	// 	this.on('change', function() {
	// 		console.log("Model changed");
	// 	});
	// 	this.on('change:color', function(){
	// 		console.log("The color for the " + this.get("name") + + " model just changed to white.");
	// 	});


	// }


});