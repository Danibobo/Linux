var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {title: "NVD3"});
});

app.listen(8080);
console.log('Listening on port 8080');
