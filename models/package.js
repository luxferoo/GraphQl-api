export default (sequelize, DataTypes) => {
    const Package = sequelize.define('Package', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameFr: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameAr: {type: DataTypes.STRING, unique: true, allowNull: false},
        description: DataTypes.STRING,
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true}
    });
    Package.associate = function (models) {
        this.hasMany(models.Image);
    };
    return Package
};