var gamePrompt = require('game-prompt');


//Global Variables
var playerName;
var vehicleName;
var planetName;
var vehicleGas = 1000;
var gasToPlanet = displayPlanets.Distance;

var Planets = 
				[
				{name:'Earth', 
				Distance: 10 },

				{name:'Mesnides', 
				Distance:20 },

				{name:'Laplides', 
				Distance: 50 },

				{name:'Kiyturn',
				Distance: 120 },

				{name:'Aenides', 
				Distance: 25 },

				{name:'Cramuthea',
				Distance: 200 },

				{name:'Smeon T9Q', 
				Distance: 400 },

				{name:'Gleshan 7Z9',
				Distance: 85 }
				]


function startGame() {
	gamePrompt('S.R.S.V Press ENTER to start.', intro);
}

function intro(){
	gamePrompt('You are the captain of a Solo Research Space Vehicle (S.R.S.V.) ' + 
		'on an expedition to explore foreign planets.' + 
		'Your mission is to make contact with three alien life forms,' +
		' acquire an artifact representative of their culture,' +
		' and bring back your findings to Earth.', collectInfo);
}

function collectInfo(){
	gamePrompt([
		'A voice comes on over the intercom.',
		'"Please state your name for identity verification"'
	], collectName);
}

function collectName (name) {
	playerName = name;

	gamePrompt([
		'"Thank you Captain ' + playerName + '."',
		'"Please state your vehicle name for identity purposes."'
		], collectVehicleName);

}

function collectVehicleName(name){
	vehicleName = name;

	gamePrompt([
		'"Your S.R.S.V ' + vehicleName + ', ' + 'comes equipped with' + vehicleGas + 'gallons of fuel."',
		'"Your mission is to travel to any 3 of the following planets at various distances without running out of fuel."',
		'"Distances represent how many gallons of gas the trip will use."',
		'"When you arrive at a planet it will either be inhabited or not. Inhabited planets will have a representative you can talk to to ask for an artifact or to ask about other planets."'
		], displayPlanetsArray);
}

function displayPlanetsArray(){

	gamePrompt(['"Where to captain ' + playerName + '?"', 
		Planets.forEach(function(planet){
			console.log(planet.name), planetChoice

		})
	])
}

function planetChoice(answer){ //Jacob's code

	var destination;
	Planets.forEach(function(d){
			if (planet.toUpperCase() === d.name.charAt(0)){ //should I say if (answer.toUpperCase)
				destination = d;
			}
	}
}

function approachdestination(planet){

	gamePrompt(


		)


}


function leftoverGas(vehicleGas,gasToPlanet){

    	return vehicleGas - gasToPlanet;
}

function travelMessage(){

	gamePrompt(['Flying to' + planetName + '...' + 'You used' + gasToPlanet + 'gallons of gas.' + vehicleName + 'now has + leftoverGas() + gallons.'])

}


// function travelToPlanet(action){

// 	if (action() === 'mesnides') {



// }



startGame();