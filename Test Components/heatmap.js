'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('dict.json');
let data = JSON.parse(rawdata);

function heatMap(data)
{
    var arr = [];
    for (var i = 0; i < 68; ++i) {
        var columns = [];
        for (var j = 0; j < 105; ++j) {
            columns[j] = 0;
        }
        arr[i] = columns;
    }

    for (var i = 0; i < data.length; i++) 
    {
        var tuple = data[i];

        var x = tuple[1]; 
        if (x > 68)
        {
            x = 68
        }

        var y = tuple[2]; 
        if ( y > 105)
        {
            y = 105;
        }
        arr[x][y] = arr[x][y] + 1;
    }

    console.log(arr);   // The function returns the product of p1 and p2
    return arr;
}

heatMap(data.Person.ID['5']);