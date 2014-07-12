var express = require('express'),
    routes  = require('./routes'),
    hero    = require('./routes/hero'),
    http    = require('http'),
    path    = require('path'),
    db      = require('./model');

var app = module.exports = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};

// routes
app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.get('/hero', hero.index);
app.get('/hero/:name', hero.hero);
//app.get('*', routes.index); // redirect everything else to index
//app.get('/partials/:name', routes.partials);
//app.get('/api/name', api.name); // json api

// start
db
  .sequelize
  .sync({ force: true })
  .complete(function(err) {
    if (err) {
      throw err[0]
    } else {
      http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'))
      })
    }
  })

/*
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
*/
