export default (sequelize, DataTypes) => {
    return sequelize.define('Image', {
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        path: {type: DataTypes.STRING, allowNull: false},
    });
};