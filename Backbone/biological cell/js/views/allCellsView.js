// Namespace our cellApp
var app = app || {};

// The view for all the cells
app.allCellsView = Backbone.View.extend({

	tagName: "section",

	render: function() {
		this.collection.each(this.addCell, this);
		return this;
	},

	addCell: function(cell) {
		var cellView = new app.singleCellView ({ model: cell });
		this.$el.append(cellView.render().el);
	}



});