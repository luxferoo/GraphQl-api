export default (sequelize, DataTypes) => {
    const address = sequelize.define('Address', {
        name: {type: DataTypes.STRING, allowNull: false},
        address: {type: DataTypes.STRING, allowNull: false},
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        phoneNumber: {type: DataTypes.STRING, allowNull: false},
        postCode: {type: DataTypes.STRING, allowNull: false},
        deleted: {type: DataTypes.BOOLEAN, defaultValue: false}
    });
    address.associate = function (models) {
        this.belongsTo(models.City);
        this.belongsTo(models.User);
    };
    return address;
};