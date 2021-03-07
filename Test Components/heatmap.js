'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('dict.json');
let dataRaw = JSON.parse(rawdata);

function heatMap(data)
{
    var ro = Math.floor(68/4)
    var col = Math.floor(105/4)
    var arr = [];
    for (var i = 0; i < ro; i++) {
        var columns = [];
        for (var j = 0; j < col; j++) {
            columns[j] = 0;
        }
        arr[i] = columns;
    }

    for (var i = 0; i < data.length; i++) 
    {
        var tuple = data[i];

        var x = tuple[2];
        x =  Math.floor(x/4);
        if (x > ro)
        {
            x = ro
        }

        var y = tuple[1];
        y =  Math.floor(y/4); 
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

heatMap(dataRaw.BallPos);