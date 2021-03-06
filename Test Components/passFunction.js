"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync("dict.json");
let data = JSON.parse(rawdata);

function passCounter(ballPositions) {
    var numberOfPasses = 0;

    var passDistance = 30;
    var fps = 25;
    for(var second = 0; second < ballPositions.length/fps - 1; second++)
    {
        if(distanceBetweenTwoPoints(ballPositions[second * fps], ballPositions[(second + 1) * fps]) > passDistance)
        {
           numberOfPasses++;
        }
    }

    return numberOfPasses;
}

function distanceBetweenTwoPoints(coordinate1, coordinate2) {
    return Math.sqrt(Math.pow(coordinate2[0] - coordinate1[0], 2) 
                        + Math.pow(coordinate2[1] - coordinate1[1], 2));
}

console.log(passCounter(data.BallPos));
