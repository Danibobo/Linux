
//create variables 
var exec = require("child_process").exec;
var dblite = require('dblite');
var quiche = require('quiche');
var db = dblite('./Temperature.db');
function hide()

//create function to display data in databse
function displayDataB(response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    db.on('error', function(err)
    {
        console.error(err.toString());
    });

    //make table for data in csv file      
    db.query('CREATE TABLE IF NOT EXISTS tempTable(time INTEGER, temp INTEGER)');
    db.query('BEGIN');
    db.query('DELETE FROM tempTable');
    db.query('COMMIT');
    db.query('.mode csv');
    db.query('.import tempData.csv tempTable');
 
   //set up table specifications
  var bar = new quiche('bar');
  bar.setWidth(900);
  bar.setHeight(400);
  bar.setTitle('Temperature');
  bar.setBarWidth(15);
  bar.setBarSpacing(7);
  bar.setLegendHidden();

  //read data time and temp in from table 
  db.query('SELECT time, temp FROM tempTable', ['time', 'temp'],
        function(rows)
        {
            response.write('<html><body><button onclick="/handler.js/hide()">table</button>');
            response.write('<div id="ttable"><table border="1"><tr><th>Time</th><th>Temperature</th></tr>');
            rows.forEach(makeSet);
        }
    );
    //create each set of data for line of table
    function makeSet(row, i, rows)
    {
        bar.addData([row.temp], row.time, 'FF0000');
        response.write('<tr><td>' + row.time + 
                        '</td><td>' + row.temp + '</td></tr> \n');
                        
        //completely populate table until no more data                
        if(i+1 === rows.length)
        {
            db.close();
            bar.setAutoScaling();
            var imageUrl = bar.getUrl(true);
            response.write('</table></div><img src="' + imageUrl + '"></body></html>');
            response.end();
        }
    }                        
    function sleep()
    {
        var ms = 1000;
        var timeValue = new Date().getTime();
        while(new Date().getTime() < timeValue + ms);
    }
}

//send final 
exports.displayDataB = displayDataB;
