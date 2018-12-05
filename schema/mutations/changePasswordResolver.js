import validator from '../../helpers/validator';
import bcrypt from 'bcrypt';
import random from "../../helpers/random";
import trans from 'itranslator';
import CustomError from "../../helpers/customError";

export default async (_, {password, newPassword, confirmPassword}, {user, lang}) => {
    if (!user)
        throw new CustomError(trans('401', {}, {lang}));
    if (!validator.isPassword(newPassword))
        throw new CustomError(trans('invalid.password.newFormat', {}, {lang}));

    if (newPassword !== confirmPassword)
        throw new CustomError(trans('invalid.password.notMatch', {}, {lang}));

    if (password === newPassword)
        throw new CustomError(trans('invalid.password.samePasswords', {}, {lang}));

    if (!bcrypt.compareSync(password, user.password))
        throw new CustomError(trans('invalid.password.password', {}, {lang}));

    user.password = newPassword;
    user.refreshToken = random(2);
    try {
        user.save();
        return trans('done.password.change', {}, {lang});
    } catch (e) {
        return trans('500', {}, {lang});
    }
}