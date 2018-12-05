import jwt from "jsonwebtoken";
import validator from '../../helpers/validator';
import bcrypt from 'bcrypt';
import trans from 'itranslator';
const jwtConf = require('../../config/config.json').jwt;

export default (p, {email, password}, {lang, models}) => {
    return new Promise((resolve, reject) => {
        if (!validator.isEmail(email))
            reject(trans('invalid.email.format', {}, lang));
        models.User.findOne({where: {email}})
            .then(user => {
                if (!user)
                    reject(trans('invalid.combination', {}, lang));
                if (!bcrypt.compareSync(password, user.password))
                    reject(trans('invalid.combination', {}, lang));
                let token = jwt.sign({
                    data: {user: user.id, refreshToken: user.refreshToken}
                }, jwtConf.secret, {expiresIn: jwtConf.expiresIn});
                token = `Bearer ${token}`;
                resolve({
                    token,
                    user
                })
            })
            .catch(() => {
                reject(trans('500', {}, lang));
            });
    })
};
