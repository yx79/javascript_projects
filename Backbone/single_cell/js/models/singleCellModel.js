// Namespace our app
var app = app || {}
app.singleCell = Backbone.Model.extend({
	defaults: {
		color: "blue",
		img: "images/placeholder.jpg"
	},

	initialize: function() {
		console.log("A model isntance named " + this.get("name") + " has been created.");
	}

})