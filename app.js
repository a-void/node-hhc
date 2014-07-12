
/**
 * Module dependencies
 */

var express = require('express'),
    routes  = require('./routes'),
    login   = require('./routes/login'),
    api     = require('./routes/api'),
    http    = require('http'),
    path    = require('path'),
    db      = require('./models');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/login', login.index);
//app.post('/users/create', user.create);
//app.post('/users/:user_id/tasks/create', task.create);
//app.get('/users/:user_id/tasks/:task_id/destroy', task.destroy);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * DB
 */
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

/**
 * Start Server
 */

/*
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
*/
