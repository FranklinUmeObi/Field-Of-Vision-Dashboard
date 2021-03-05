import React from "react";

import "./StatsPage.css";
import fileData from "../../Data/stats.json";
import Sketch from "react-p5";

function TopDown() {
  let frame = 0;
  let lastFrame = 1;
  let players = fillPlayerArray(fileData);
  let ball = fillBallArray(fileData);

  let slider;
  let canvas;

  function fillBallArray(data) {
    let arrayOfBallCo = [];

    let ball = Object.values(data.BallPos);

    for (let i = 0; i < ball.length; i++) {
      const frame = ball[i];
      let coordinate = { x: frame[1], y: frame[2] };
      arrayOfBallCo.push(coordinate);
    }
    return arrayOfBallCo;
  }

  function fillPlayerArray(data) {
    let arrayOfPlayers = [];

    for (let player of Object.values(data.Person.ID)) {
      let playerCoordinates = [];
      if(player.length > lastFrame) lastFrame = player.length
      for (let i = 0; i < player.length; i++) {
        
        const frame = player[i];
        let coordinate = { x: frame[1], y: frame[2] };
        playerCoordinates.push(coordinate);
      }
      arrayOfPlayers.push(playerCoordinates);
    }
    return arrayOfPlayers;
  }

  //---------------------------------------
  //P5
  //---------------------------------------

  let factor = 4;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(25);
    if (p5.windowWidth < 400) factor = 2;
    else if (p5.windowWidth < 600)factor = 3;
    else factor = 4;
    canvas = p5.createCanvas(105 * factor, 68 * factor).parent(canvasParentRef);

    canvas.position();
    
    slider = p5.createSlider(0, lastFrame, frame);
    slider.position(canvas.position().x,canvas.position().y + 68 * factor);
    slider.style('width', `${105 * factor}px`);

  };

  const windowResized = (p5) => {
    if (p5.windowWidth < 400) factor = 2;
    else if (p5.windowWidth < 600)factor = 3;
    else factor = 4;
    p5.resizeCanvas(105 * factor, 68 * factor);
    slider.position(canvas.position().x,canvas.position().y + 68 * factor);
    slider.style('width', `${105 * factor}px`);
  };

  const draw = (p5) => {
    p5.background(p5.color(8, 227, 150));

    frame = slider.value();

    drawPitch(p5);
    drawBall(p5, ball, frame);
    drawPlayers(p5, players, frame);

    if (frame < 999999) {
        frame++
    }

    slider.value(frame)
    
  };

  const drawPitch = (p5) => {
    let centerRadius = 17 * factor;
    let smallw = 8 * factor;
    let smallh = 12 * factor;
    let bigw = 25 * factor;
    let bigh = 25 * factor;

    //halfwayline
    p5.strokeWeight(2);
    p5.line((105 * factor) / 2, 0, (105 * factor) / 2, 68 * factor);
    //center circle
    p5.fill("rgba(8, 227, 150, 0)");
    p5.ellipse((105 * factor) / 2, (68 * factor) / 2, centerRadius);

    //goal boxes
    p5.rectMode(p5.CENTER);
    //left
    p5.rect(0, (68 * factor) / 2, smallw, smallh);
    p5.rect(0, (68 * factor) / 2, bigw, bigh);
    //right
    p5.rect(105 * factor, (68 * factor) / 2, smallw, smallh);
    p5.rect(105 * factor, (68 * factor) / 2, bigw, bigh);

    p5.fill("rgba(8, 227, 150, 1)");
  };

  const drawPlayers = (p5, players, frame) => {
    //console.log(frame);30 total frames
    p5.strokeWeight(1);
    p5.fill("rgba(208, 27, 150, 1)");
    for (let i = 0; i < players.length; i++) {
        if (players[i][frame]) {
            p5.ellipse(players[i][frame].x, players[i][frame].y, 10);
        }
      
    }
    p5.fill("rgba(8, 227, 150, 1)");
  };

  const drawBall = (p5, ball, frame) => {
    p5.strokeWeight(1);
    p5.fill(255);
    if (ball[frame]) {
        p5.ellipse(ball[frame].x, ball[frame].y, 15);
    }
    p5.fill("rgba(8, 227, 150, 1)");
  };

  return (
    <div className="canvasContainer">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}

export default TopDown;
