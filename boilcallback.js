//Boil the water
function boilWater(next) {
	var water = "cold";
	setTimeout(function() {
		water = "hot";
		console.log('inside '+ water);
		next(water);
	}, 2000); 
}

function pourWater(water){
	console.log("pouring "+ water +" water into the mug");
}

boilWater(pourWater);