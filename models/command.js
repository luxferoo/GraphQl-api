export default (sequelize, DataTypes) => {
    const Command = sequelize.define('Command', {
        letter: {type: DataTypes.STRING, allowNull: false},
        done: {type: DataTypes.BOOLEAN, defaultValue: true},
        canceled: {type: DataTypes.BOOLEAN, defaultValue: false},
        deleted: {type: DataTypes.BOOLEAN, defaultValue: false}
    });
    Command.associate = function (models) {
        this.belongsTo(models.Letter);
        this.belongsTo(models.Address);
        this.hasMany(models.CartItem);
    };
    return Command;
};