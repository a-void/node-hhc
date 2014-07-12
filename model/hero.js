module.exports = function (sequelize, DataTypes) {
    var Hero = sequelize.define('Hero',
    {
        name: DataTypes.STRING(50),
        role: DataTypes.STRING(200),
        hp: DataTypes.INTEGER,
        dmg: DataTypes.STRING(20),
        armor: DataTypes.FLOAT(4,2),
        difficulty: DataTypes.FLOAT(3,1),
        range: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        stuns: DataTypes.INTEGER,
        side: DataTypes.STRING(20),
        stat: DataTypes.STRING(10),
        slug: DataTypes.STRING
    }, 
    {
        tableName: 'hero',
        classMethods: {
        }
    })

    return Hero 
}
