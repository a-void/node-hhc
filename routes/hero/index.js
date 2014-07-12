/**
 * Routes
 */
var user = false;

// /
exports.index = function(req, res){

    // TODO: Sequelize find by hero name
    res.render('hero-list', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};

// /hero/:id
exports.hero = function(req, res){
    var name = req.params.name;

    // TODO: Sequelize find by hero name

    res.render('hero', {
        login: user ? 'ACCOUNT' : 'LOGIN'
    });
};
