"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync("dict.json");
let data = JSON.parse(rawdata);

function shotCounter(ballPositions) {
    var numberOfShots = 0;

    var fps = 25;
    for(var second = 0; second < ballPositions.length/fps; second++)
    {
        //Check if in left or right 6-yrd box
        if((ballPositions[second * fps][1] >= 0) 
            && (ballPositions[second * fps][1] <= 6)
            && (ballPositions[second * fps][2] >= 25) 
            && (ballPositions[second * fps][2] <= 43))
        {
            numberOfShots++;
        }
        else if((ballPositions[second * fps][1] >= 99) 
                && (ballPositions[second * fps][1] <= 105)
                && (ballPositions[second * fps][2] >= 25) 
                && (ballPositions[second * fps][2] <= 43))
        {
           numberOfShots++;
        }
    }

    return numberOfShots;
}

console.log(shotCounter(data.BallPos));