// Namespace our cellApp
var app = app || {}

// The view for a single model view, which is one cell
app.singleCellView = Backbone.View.extend({
	
	tagName: "article",
	className: "cellListItem",

	template: _.template(  $("#cellElement").html()  ),

	render: function() {
		var cellTemplate = this.template(this.model.toJSON());
		this.$el.html(cellTemplate);
		return this;
	}



});