export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        nameAr: DataTypes.STRING,
        nameFr: DataTypes.STRING,
        description: DataTypes.STRING,
        price: {type: DataTypes.FLOAT, validate: {min: 0}},
        enabled: {type: DataTypes.BOOLEAN, defaultValue: true}
    });
    Product.associate = function (models) {
        this.hasMany(models.Image);
        this.belongsTo(models.Category);
    };
    return Product;
};