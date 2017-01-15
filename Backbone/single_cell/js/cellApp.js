var redBloodCell = new app.singleCell({
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

var neuronsCell = new app.singleCell({
	name: "Neuron Cell",
	link: "neuronCell"
});


console.log(redBloodCell.toJSON());
console.log(osteoclast.toJSON());
console.log(helaCancerCell.toJSON());

// change the corlor
redBloodCell.set('color', "white");

// create cell collection group
var cellGroup = new app.CellsCollection([
	redBloodCell, osteoclast, neuronsCell
]);

cellGroup.add(helaCancerCell);
cellGroup.remove(neuronsCell);


console.log(cellGroup.toJSON());




















