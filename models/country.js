export default (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true}
    });

    Country.associate = function (models) {
        this.hasMany(models.City, {foreignKey: 'countryId', sourceKey: 'id' });
    };

    return Country;
};