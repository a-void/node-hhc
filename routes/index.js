/**
 * GET home page.
 */
var db = require('../models');

exports.index = function(req, res){
    db.Hero.findAll().success(function (heroes) {
        res.render('index', {
            title: 'Express',
            heroes: heroes 
        })
    })

    //res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
