export default (sequelize, DataTypes) => {
    const CartItem = sequelize.define('CartItem', {
        quantity: {type: DataTypes.INTEGER, allowNull: false},
        canceled: {type: DataTypes.BOOLEAN, defaultValue: false},
        deleted: {type: DataTypes.BOOLEAN, defaultValue: false},
    }, {});
    CartItem.associate = function (models) {
        this.belongsTo(models.Package);
        this.belongsTo(models.Product);
        this.belongsTo(models.Command);
    };
    return CartItem;
};