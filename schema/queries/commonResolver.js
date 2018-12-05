import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default (entity, parent, {limit, offset},{lang}) => {
    try {
        return entity.findAll({offset, limit, where: {enabled: true}})
    }
    catch (e) {
        throw new CustomError(trans('500',{},lang))
    }
}