// Namespace our cellApp
var app = app || {};

app.Router = Backbone.Router.extend({
	
	routes :{
		"": "noCopy",
		"redBloodCell": "redBloodCellMessage",
		"boneCell": "boneCellMessage",
		"helaCell": "helaCellMessage"
	},

	noCopy: function() {
		$("#copy").html("");
	},

	redBloodCellMessage: function() {
		$("#copy").html("Red Blood cell");
	},


	boneCellMessage: function() {
		$("#copy").html("Bone cell");
	},


	helaCellMessage: function() {
		$("#copy").html("Hela cell");
	}


});