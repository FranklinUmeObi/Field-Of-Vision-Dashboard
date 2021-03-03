import React, { useState, useEffect} from "react";
import "./StatsPage.css";

import Chart from "react-apexcharts";
import fileData from "../../Data/stats.json";

function Heatmap() {

    const [state, setstate] = useState([])

    useEffect(() => {
        let rawHeatData = heatMap(fileData.Person.ID['8'])
        let actualHeatData = []
        for (let tuple of rawHeatData) actualHeatData.push({name:" ", data:tuple})
        actualHeatData = actualHeatData.reverse()
        setstate(actualHeatData)
    }, [])





    
  //-------------------------------------------------------------------------------

  function heatMap(data) {
    let  arr = [];
    let divisor = 6

    for (var i = 0; i < 68/divisor; i++) 
    {
      var columns = [];
      for (var j = 0; j < 105/divisor; j++) columns[j] = 1;
      arr[i] = columns;
    }

    for (let i = 0; i < data.length; i++) 
    {
      var tuple = data[i];
      var x = tuple[1];
      var y = tuple[2];

      if (x > 68) x = 68;
    
      if (y > 105) y = 105;

      arr[Math.floor(x/(68/divisor))][Math.floor(y/(105/divisor))] = arr[Math.floor(x/(68/divisor))][Math.floor(y/(105/divisor))] + 1;
    }
    return arr;
  }
  //-------------------------------------------------------------------------------




  let series = state

  let options = {
    dataLabels: { enabled: false },
    colors: ["#12e396"],
  };

  return (
    <div className="graph">
      <Chart options={options} series={series} type="heatmap" width="110%" />
    </div>
  );
}

export default Heatmap;
