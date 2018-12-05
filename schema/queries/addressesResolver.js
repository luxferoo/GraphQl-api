import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default (parent, args, {user,lang}) => {
    try {
        return user.getAddresses();
    }
    catch (e) {
        throw new CustomError(trans('500',{},lang))
    }
}