import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'AddressInputType',
    fields: {
        name: {type: GraphQLNonNull(GraphQLString)},
        address: {type: GraphQLNonNull(GraphQLString)},
        CountryId: {type: GraphQLNonNull(GraphQLID)},
        CityId: {type: GraphQLNonNull(GraphQLID)},
        postCode: {type: GraphQLNonNull(GraphQLInt)},
    }
})