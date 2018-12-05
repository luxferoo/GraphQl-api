export default (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true},
    });

    City.associate = function (models) {
    };

    return City;
};