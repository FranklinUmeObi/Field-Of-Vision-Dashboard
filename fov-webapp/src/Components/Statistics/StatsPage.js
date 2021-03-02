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

  return (
    <div className="statsAdmin">
      <div className="statsGrid">

        <div className="statCardp5">

        </div>
        <div className="Statsmalls">
            <div className="statCardSmall"></div>
            <div className="statCardSmall"></div>
        </div>

        

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
          <Chart options={areaData.options}  series={areaData.series} type="area" width="120%" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
