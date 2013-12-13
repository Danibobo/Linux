var express = require('express');
var sqlite = require('sqlite3');

var app = express();

app.get('/', function(req, res) {
    getData(function(err, data) {
        res.json(data);
    });
});

function getData(callback) {
    var db = new sqlite.Database('db/sensors.db');
    var sql = "SELECT datetime, data FROM temp";
    var data = [];

    db.each(sql, function(err, row) {
        data.push({'x':row.datetime,'y':row.data});
    }, function(err, rows) {
        if (err) {
            console.error(err.stack);
        } else {
            callback(null, data);
        }
    });

    db.close();
}

app.listen(8080);
console.log('Listening on port 8080');
