import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default (_, args, {user}) => {
    if (!user)
        throw new CustomError(trans('401'));
    args.user.firstName && (user.firstName = args.user.firstName);
    args.user.lastName && (user.lastName = args.user.lastName);
    args.user.address && (user.address = args.user.address);
    args.user.postCode && (user.postCode = args.user.postCode);
    return user.save();
}