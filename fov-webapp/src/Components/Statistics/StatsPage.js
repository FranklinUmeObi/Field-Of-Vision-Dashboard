import React from "react";
import "./StatsPage.css";
import Chart from "react-apexcharts";

import Heatmap from "./Heatmap"

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
        </div>


        <br id="ball" />
        <div className="statCardMedium">
          <h3 className="statLabel">Heatmap</h3>
          <Heatmap/>
        </div>
        <div className="Statsmalls">
          <div className="statCardSmall">
            <div className="smallstatcardtext">
              <h2 className="statcardTextmain">183</h2>
              <h4 className="statcardTextsub">TOTAL PASSES</h4>
            </div>
            <div className="smallstatcardicon">
            <ThemeProvider theme={theme}><CallMergeIcon color="secondary" className="statsIcon"/></ThemeProvider>
            </div>
          </div>
          <div className="statCardSmall">
            <div className="smallstatcardtext">
              <h2 className="statcardTextmain">7</h2>
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

export default StatsPage;
