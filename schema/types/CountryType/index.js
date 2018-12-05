import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

import CityType from '../CityType';
import Sequelize from 'sequelize';

export default new GraphQLObjectType({
    name: 'Country',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        cities: {
            type: new GraphQLList(CityType),
            args: {
                name: {type: GraphQLString},
            },
            resolve: (parent, args, {models}) => {
                let where = {enabled: true, countryId: parent.dataValues.id};
                args.name && (where.name = {[Sequelize.Op.iRegexp]: `^${args.name}`});
                try {
                    return models.City.findAll({where});
                }
                catch (e) {
                    return null;
                }
            }
        },
        enabled: {type: GraphQLBoolean},
    })
});