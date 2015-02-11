
//Boil the water
function boilWater(callback) {
	var water = "hot";
	setTimeout(function() {
		water = "hot";
		callback(water);
	}, 5000); 
}


	


























//Get the mug
function getMug() {
	var mug = [];
	return mug;
}
// pour water into mug
function pourWater(mug, water){
	mug.push(water);
	return mug;
}

// var mug = [];
// // console.log(pourWater(mug, 'cold'));


// console.log(boilWater());
//Get the tea bag



module.exports = {
	getMug: getMug,
	pourWater:pourWater,
	boilWater: boilWater
};
//Get the sugar

//Walk to the fridge

//Get the milk

//Walk to the cupboard

//Walk back

//Drink tea

