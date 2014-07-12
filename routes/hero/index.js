/**
 * Routes
 */
var user = false;
var db   = require('../../model');

// /
exports.index = function(req, res){
    // find all heroes
    db.Hero.findAll().success(function(heroes) {
        res.render('hero-list', {
            login: user ? 'ACCOUNT' : 'LOGIN',
            heroes: heroes
        });
    });
};

// /hero/:name
exports.hero = function(req, res){
    var name = req.params.name;

    // find by slug name
    db.Hero.find({ where: { slug: name } }).success(function(hero) {
        res.render('hero', {
            login: user ? 'ACCOUNT' : 'LOGIN',
            hero: hero
        });
    });
};
