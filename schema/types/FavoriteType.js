import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import CommandType from './CommandType';
import AddressType from './AddressType';

export default new GraphQLObjectType({
    name: 'Favorite',
    fields: {
        id: {type: GraphQLID},
        command: {type: CommandType},
        address: {type: AddressType},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});