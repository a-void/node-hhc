/**
 * Routes
 */
var user = false;

// /
exports.index = function(req, res){
    res.render('index', {
        link: '/hero',
        message: 'Hero List',
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

// hero
exports.hero = function(req, res){
    res.render('hero-list', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

// login
exports.login = function(req, res){
    res.render('login', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

// register
exports.register = function(req, res){
    res.render('register', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

// angular single page routing
exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
