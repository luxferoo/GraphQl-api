import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql';
import CityType from "./CityType";
import CountryType from "./CountryType";

export default new GraphQLObjectType({
    name: 'Address',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
        postCode: {type: GraphQLInt},
        city: {type: CityType},
        deleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});