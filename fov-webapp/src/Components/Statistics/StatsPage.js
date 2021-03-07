import React from "react";
import "./StatsPage.css";
import Chart from "react-apexcharts";

import Heatmap from "./Heatmap"
import TopDown from "./TopDown"
import fileData from "../../Data/stats.json";

import WhatshotIcon from '@material-ui/icons/Whatshot';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function StatsPage() {

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: "#000",
          },
          secondary: {
            main: "#fff",
          },
        },
      });

  let pieData = {
    options: {
      labels: ["Home", "Away"],
    },
    series: [40, 60],
  };

  let areaData = {
    series: [
      {
        name: "Home",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Away",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

 

  return (
    <div className="statsAdmin">

      <br id="game" />
      <div className="statsGrid">


        <br id="general" />

        <div className="statCardLarge">
        <h3 className="statLabel">Game Replay</h3>
        <TopDown/>
        </div>


        <br id="ball" />
        <div className="statCardMedium">
          <h3 className="statLabel">Heatmap</h3>
          <Heatmap/>
        </div>
        <div className="Statsmalls">
          <div className="statCardSmall">
            <div className="smallstatcardtext">
              <h2 className="statcardTextmain">{passCounter(fileData.BallPos)}</h2>
              <h4 className="statcardTextsub">TOTAL PASSES</h4>
            </div>
            <div className="smallstatcardicon">
            <ThemeProvider theme={theme}><CallMergeIcon color="secondary" className="statsIcon"/></ThemeProvider>
            </div>
          </div>
          <div className="statCardSmall">
            <div className="smallstatcardtext">
              <h2 className="statcardTextmain">{shotCounter(fileData.BallPos)}</h2>
              <h4 className="statcardTextsub">TOTAL SHOTS</h4>
            </div>
            <div className="smallstatcardicon">
            <ThemeProvider theme={theme}><WhatshotIcon color="secondary" className="statsIcon"/></ThemeProvider>
            </div>
          </div>
        </div>

        <br id="player" />

        <div className="statCard">
          <h3 className="statLabel">Possesion</h3>
          <div className="graph">
            <Chart
              options={pieData.options}
              series={pieData.series}
              type="donut"
              width="110%"
            />
          </div>
        </div>

        <div className="statCard">
          <h3 className="statLabel">Distance Travelled</h3>
          <div className="graph">
            <Chart
              options={areaData.options}
              series={areaData.series}
              type="area"
              width="120%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



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


export default StatsPage;
