var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User',
    {
        username: { type: DataTypes.STRING, unique: true },
        email: { type: DataTypes.STRING, validate: { isEmail: true } },
        password: { 
            type: DataTypes.STRING, 
            validate: { notNull: true, notEmpty: true },
            set: function(pass) {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(pass, salt);

                this.setDataValue('password', hash);
            }
        },
        role: { type: DataTypes.ENUM('USER_ROLE', 'ADMIN_ROLE'), defaultValue: 'USER_ROLE' }
    }, 
    {
        tableName: 'user',
        classMethods: {
        }
    })

    return User 
}
