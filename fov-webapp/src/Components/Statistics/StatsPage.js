import React from "react";
import "./StatsPage.css";
import Chart from "react-apexcharts";

function StatsPage() {


  let pieData = {
    options: {
      labels: ["Home", "Away"],
    },
    series: [40, 60],
  };



  let areaData = {
    series: [{
        name: 'Home',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Away',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options:{
        chart: {
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
    };


    let heatData ={
          series: [
        {name: '',data: [1,11,15,9,2,12,1,13,12,11,17,4,18,3,2,10,1,14,7,18]},
        {name: '',data: [16,16,9,17,5,8,13,7,0,16,3,12,1,10,3,17,5,19,12,14]},
        {name: '',data: [4,4,14,11,15,9,16,9,4,5,16,16,9,17,5,8,13,7,0,16]},
        {name: '',data: [3,12,1,10,3,17,5,19,12,14,3,13,6,16,11,13,4,8,9,15]},
        {name: '',data: [17,0,16,18,5,5,3,16,3,4,17,0,16,18,5,5,3,16,3,4]},
        {name: '',data: [11,13,0,7,5,5,12,8,13,16,4,7,7,17,18,14,18,0,19,9]},
        {name: '',data: [3,13,6,16,11,13,4,8,9,15,17,0,16,18,5,5,3,16,3,4]},
        {name: '',data: [4,6,19,10,6,8,12,7,14,12,3,13,6,16,11,13,4,8,9,15]},
        {name: '',data: [4,7,7,17,18,14,18,0,19,9,4,7,7,17,18,14,18,0,19,9]},
        ],
        options : {
        dataLabels: {
          enabled: false
        },
        colors: ["#00e396"],
        }
    }

  return (
    <div className="statsAdmin">
      <div className="statsGrid">

        <div className="statCardLarge">

        </div>
        <div className="statCardMedium">
          <h3 className="statLabel">Heatmap</h3>
          <div className="graph">
            <Chart options={heatData.options}  series={heatData.series} type="heatmap" width="110%" />
          </div>
          
        </div>
        <div className="Statsmalls">
            <div className="statCardSmall">
                <div className="smallstatcardtext">
                    <h2 className="statcardTextmain">183</h2>
                    <h4 className="statcardTextsub">21</h4>
                </div>
                <div className="smallstatcardicon">
                    
                </div>
            </div>
            <div className="statCardSmall">

            </div>
        </div>

        

        <div className="statCard">
          <h3 className="statLabel">Possesion</h3>
          <div className="graph">
            <Chart options={pieData.options} series={pieData.series} type="donut"width="110%" />
          </div>
        </div>

        <div className="statCard">
          <h3 className="statLabel">Distance Travelled</h3>
          <div className="graph">
            <Chart options={areaData.options}  series={areaData.series} type="area" width="120%" />
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default StatsPage;
