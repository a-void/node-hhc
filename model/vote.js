module.exports = function (sequelize, DataTypes) {
    var Vote = sequelize.define('Vote',
    {
        user_id: DataTypes.INTEGER,
        hero_id: DataTypes.INTEGER,
        counter_id: DataTypes.INTEGER,
        vote_type: DataTypes.ENUM('up', 'down')
    }, 
    {
        tableName: 'vote',
        classMethods: {
            //associate: function(models) {
            //  Hero.hasMany(models.Task)
            //}
        }
    })

    return Vote 
}
