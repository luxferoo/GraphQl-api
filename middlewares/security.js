import models from '../models';
import jwt from 'jsonwebtoken';

const jwtConf = require('../config/config.json').jwt;

export default {
    getUser(context, req, _, next) {
        const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;
        context.user = null;
        jwt.verify(token, jwtConf.secret, function (err, decoded) {
            if (err)
                next();
            if (decoded)
                models.User.findOne({where: {id: decoded.data.user, blocked: false}}).then(user => {
                    if (user)
                        context.user = user;
                    next();
                }).catch(() => {
                    next();
                })
        });
    }
}
