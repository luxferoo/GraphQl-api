export default (sequelize, DataTypes) => {
    const Letter = sequelize.define('Letter', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameFr: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameAr: {type: DataTypes.STRING, unique: true, allowNull: false},
        description: DataTypes.STRING,
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true}
    });
    Letter.associate = function (models) {
        this.hasMany(models.Image);
    };
    return Letter;
};