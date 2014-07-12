/**
 * GET home page.
 */
var user = false;

exports.index = function(req, res){
    res.render('index', {
        link: '/hero',
        message: 'Hero List',
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

exports.hero = function(req, res){
    res.render('hero-list', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

exports.login = function(req, res){
    res.render('login', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

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
