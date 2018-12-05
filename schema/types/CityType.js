import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
} from 'graphql';

import CountryType from './CountryType';

export default new GraphQLObjectType({
    name: 'City',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        country: {
            type: CountryType,
            resolve: (parent, a, {models}) => {
                try {
                    return models.Country.findOne({where: {id: parent.dataValues.countryId}});
                }
                catch (e) {
                    return null;
                }
            }
        },
        enabled: {type: GraphQLBoolean},
    })
});