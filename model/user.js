module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User',
    {
        username: { type: DataTypes.STRING, unique: true },
        email: { type: DataTypes.STRING, validate: { isEmail: true } },
        password: { type: DataTypes.STRING, validate: { notNull: true, notEmpty: true } },
        role: { type: DataTypes.ENUM('USER_ROLE', 'ADMIN_ROLE'), defaultValue: 'USER_ROLE' }
    }, 
    {
        tableName: 'user',
        classMethods: {
            //associate: function(models) {
            //  Hero.hasMany(models.Task)
            //}
        }
    })

    return User 
}
