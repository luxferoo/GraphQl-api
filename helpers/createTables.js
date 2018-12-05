import m from '../models';

m.sequelize.authenticate()
    .then(async () => {
        await m.Letter.sync({force: true});
        await m.Country.sync({force: true});
        await m.City.sync({force: true});
        await m.Category.sync({force: true});
        await m.Package.sync({force: true});
        await m.User.sync({force: true});
        await m.Address.sync({force: true});
        await m.Product.sync({force: true});
        await m.CartItem.sync({force: true});
        await m.Command.sync({force: true});
        //   await m.CommandCartItem.sync({force: true});
        await m.Image.sync({force: true});
        m.sequelize.close();
    })
    .catch(e => {
        m.sequelize.close();
        console.log(e)
    })
;