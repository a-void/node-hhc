/**
 * GET home page.
 */
var db = require('../../models');

exports.index = function(req, res){
    res.render('index');
    /*
    db.Hero.findAll().success(function (heroes) {
        res.render('index', {
            title: 'Express',
            heroes: heroes 
        })
    })
    */

};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
