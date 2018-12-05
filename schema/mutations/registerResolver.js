import validator from '../../helpers/validator';
import jwt from "jsonwebtoken";
import trans from 'itranslator';
import CustomError from "../../helpers/customError";

const jwtConf = require('../../config/config.json').jwt;

export default (_, {email, password, confirmPassword}, {models, lang}) =>
    new Promise((resolve, reject) => {
        Promise.all([
            !validator.isPassword(password),
            password !== confirmPassword,
            !validator.isEmail(email),
            validator.isEmailUnique(models.User, email)
        ]).then(result => {
            const errors = {password: [], email: []};
            if (result[0])
                errors.password.push(trans('invalid.password.format', {}, {lang}));
            if (result[1])
                errors.password.push(trans('invalid.password.notMatch', {}, {lang}));
            if (result[2])
                errors.email.push(trans('invalid.email.format', {}, {lang}));
            if (!result[3])
                errors.email.push(trans('invalid.email.notUnique', {email}, {lang}));

            for (let i in errors) {
                if (errors[i].length === 0)
                    delete errors[i];
            }

            if (Object.keys(errors).length !== 0) {
                throw new CustomError(errors)
            }
            models.User.create({email, password}).then(user => {
                if (!user)
                    reject(trans('500', {}, {lang}));
                let token = jwt.sign({
                    data: {user: user.id, refreshToken: user.refreshToken}
                }, jwtConf.secret, {expiresIn: jwtConf.expiresIn});
                token = `Bearer ${token}`;
                resolve({
                    token,
                    user
                })
            }).catch(() => {
                reject(trans('500', {}, {lang}));
            })
        }).catch((e) => {
            reject(trans(e, {}, {lang}));
        });
    })
