"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync("dict.json");
let data = JSON.parse(rawdata);

function distance(data){

//total distanceTravelled by all players assuming players labelled 1-22 inclusive
for(int i = 1; i < 23; i++){
	distanceTravelled(data[i]);
}

	//this nested function handles single player and ballpos positions
function distanceTravelled(positions){
	var distanceTravelled = 0;
	var frames = 25;
	var currentFrame = 0;

//distanceTravelled
	for(currentFrame = 0; currentFrame < positions.length/frames - 1; currentFrame++)
    {
    	distanceTravelled = distanceTravelled + distanceBetweenPositions(positions[currentFrame * frames], positions[currentFrame+1 * frames]);
    }
}
}



//remove this func before integrating, its already in the project from brian's code
function distanceBetweenTwoPoints(coordinate1, coordinate2) {
  return Math.sqrt(Math.pow(coordinate2[0] - coordinate1[0], 2) 
                      + Math.pow(coordinate2[1] - coordinate1[1], 2));
}

//total distanceTravelled by all players
distanceTravelled(data.Person);

//ball
distance.distanceTravelled(data.BallPos);

//specific player
distance.distanceTravelled(data.Person[9]);
