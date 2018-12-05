import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default async (_, args, {models, user, lang}) => {
    if (!user)
        throw new CustomError(trans('401', {}, {lang}));
    try {
        return (await models.Address.create(args)).setUser(user);
    }
    catch (e) {
        throw new CustomError(trans('400', {}, {lang}));
    }
}