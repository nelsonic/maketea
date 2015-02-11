var test = require('tape');
var maketea = require("./index.js")

test('mug is an array', function(t){
	// t.plan(1);
	var mug = maketea.getMug();
	t.deepEqual(mug, [], "Mug is an empty array");
	t.end();
});


test('pour water into the mug', function(t){
	var mug = maketea.getMug();
	var water = 'cold'
	mug = maketea.pourWater(mug, water);
	t.deepEqual(mug.length, 1, "Mug contains water");
	t.end();
});

test('boil the kettle', function(t){
	maketea.boilWater(function continue(water){
		t.plan(1);
		t.equal(water, "hot", 'Kettle is boiled!');		
	});
	// t.end();
});

