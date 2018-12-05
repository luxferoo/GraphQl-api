import trans from 'itranslator';
import CustomError from "../../helpers/customError";

export default (parent, args, {user, lang}) => {
    try {
        return user.getCommands();
    }
    catch (e) {
        throw new CustomError(trans('500',{},lang))
    }
}