import React, { useState, useEffect} from "react";
import "./StatsPage.css";

import Chart from "react-apexcharts";
import fileData from "../../Data/stats.json";

function Heatmap() {

    const [state, setstate] = useState([])

    useEffect(() => {
        let rawHeatData = heatMap(fileData.BallPos)
        let actualHeatData = []
        for (let tuple of rawHeatData) actualHeatData.push({name:" ", data:tuple})
        actualHeatData = actualHeatData.reverse()
        setstate(actualHeatData)
    }, [])





    
  //-------------------------------------------------------------------------------

  function heatMap(data) {
    let boxSize = 5
    let ro = Math.floor(68/boxSize)
    let col = Math.floor(105/boxSize)
    let arr = [];
    for (let i = 0; i < ro; i++) {
        let columns = [];
        for (let j = 0; j < col; j++) {
            columns[j] = 5;
        }
        arr[i] = columns;
    }

    for (let i = 0; i < data.length; i++) 
    {
        let tuple = data[i];

        let x = tuple[2];
        x =  Math.floor(x/boxSize);
        if (x > ro)
        {
            x = ro
        }

        let y = tuple[1];
        y =  Math.floor(y/boxSize); 
        if ( y > col)
        {
            y = col;
        }
        arr[x][y] = arr[x][y] + 1;
    }
    arr = arr.reverse()
    console.table(arr);   // The function returns the product of p1 and p2
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
