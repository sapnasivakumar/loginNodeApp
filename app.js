var app = require('express')();
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var passport = require('./passport_config');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8000);

//ejs template setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//session handling using express
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

app.listen(app.get('port'), function () {
  console.log("Magic happens on port", app.get('port'));
});

