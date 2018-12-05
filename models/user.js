import bcrypt from 'bcrypt';
import random from '../helpers/random';

export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthDay: DataTypes.DATE,
        refreshToken: {
            type: DataTypes.STRING,
            defaultValue: random.string(2)
        },
        email: {type: DataTypes.STRING, validate: {isEmail: true}, allowNull: false, unique: true},
        password: {
            type: DataTypes.STRING, allowNull: false, set(val) {
                const salt = bcrypt.genSaltSync();
                this.setDataValue('password', bcrypt.hashSync(val, salt));
            }
        },
        address: DataTypes.STRING,
        postCode: DataTypes.STRING,
        activated: {type: DataTypes.BOOLEAN, defaultValue: false},
        blocked: {type: DataTypes.BOOLEAN, defaultValue: false}
    });

    User.associate = function (models) {
        this.belongsTo(models.City);
        this.hasMany(models.Command);
        this.hasMany(models.Address);
    };

    return User;
};