import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default async (_, args, {models, user, lang}) => {
    if (!user)
        throw new CustomError(trans('401', {}, {lang}));
    const letter = await models.Letter.findOne({
        where: {
            id: args.input.LetterId,
            enabled: true
        }
    });
    if (!letter)
        throw new CustomError(trans('400', {}, {lang}));
    const address = await models.Address.findOne({
        where: {
            id: args.input.AddressId,
            deleted: false,
            UserId: user.id
        }
    });
    if (address)
        throw new CustomError(trans('400', {}, {lang}));
    try {
        return models.Command.create({...args.input, UserId: user.id})
    }
    catch (e) {
        throw new CustomError(trans('500', {}, {lang}));
    }
}