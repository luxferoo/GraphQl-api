export default (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameAr: {type: DataTypes.STRING, unique: true, allowNull: false},
        nameFr: {type: DataTypes.STRING, unique: true, allowNull: false},
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true}
    });
};