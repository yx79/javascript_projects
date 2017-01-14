var redBloodCells = new app.singleCell({
	name: "Red Blood Cells",
	shape: "Hemoglobin Structure",
	color: "red",
	img: "images/Redbloodcells.jpg",
	link: "redBloodCell"
});

var osteoclast = new app.singleCell({
	name: "Osteoclasts bone cell",
	shape: "Flat and pancake-shaped",
	img: "images/ocyteBondCell.jpg",
	link: "boneCell"
});

var helaCancerCell = new app.singleCell({
	name: "HeLa cell",
	shape: "Fried egg",
	img: "images/helaCell.jpeg",
	link: "helaCell"
});


console.log(redBloodCells.toJSON());
console.log(osteoclast.toJSON());
console.log(helaCancerCell.toJSON());




