import Sequelize from 'sequelize';
import CustomError from "../../helpers/customError";
import trans from 'itranslator';

export default (entity,_,{first, before, after,name} ,{lang}) =>{
    let where = {
        enabled: true,
    };
    name && (where.name = {[Sequelize.Op.iRegexp]: `^${name}`});
        try {
            if (before)
                where.id = {[Sequelize.Op.gt]: Buffer.from(before, 'base64').toString()};

            if (after)
                where.id = {[Sequelize.Op.lt]: Buffer.from(after, 'base64').toString()};
            return entity.findAll({
                where,
                order: [['id', 'DESC']],
                limit: first
            }).then(countries => {
                    const edges = countries.map(country => ({
                        cursor: Buffer.from(country.id.toString()).toString('base64'),
                        node: country
                    }));
                    return {
                        edges,
                        pageInfo: {
                            hasNextPage() {
                                delete where.id;
                                if (countries.length)
                                    where.id = {[before ? Sequelize.Op.gt : Sequelize.Op.lt]: countries[countries.length - 1].id};
                                if (countries.length < (first)) {
                                    return Promise.resolve(false);
                                }
                                return entity.findOne({
                                    where,
                                    order: [['id', 'DESC']],
                                }).then(country => !!country);
                            },
                            endCursor: edges.length ? edges[edges.length - 1].cursor : "",
                            firstCursor: edges.length ? edges[0].cursor : ""
                        },
                    }
                }
            )
        }
        catch (e) {
            throw new CustomError(trans('500',{},lang))
        }
    }