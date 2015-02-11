function pourWater(water){
	console.log("pouring "+ water +" water into the mug");
}

//Boil the water
function boilWater() {
	var water = "cold";
	setTimeout(function() {
		water = "hot";
		console.log('inside '+ water);
		pourWater(water);
	}, 2000); 
}

boilWater();
// console.log("outside "+water);