import {
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import CartInputType from './CartInputType';

export default new GraphQLInputObjectType({
    name: 'CommandInputType',
    fields: {
        letter: {type: GraphQLNonNull(GraphQLString)},
        LetterId: {type: GraphQLNonNull(GraphQLID)},
        CartItems: {type: GraphQLNonNull(GraphQLList(CartInputType))},
        firstName: {type: GraphQLNonNull(GraphQLString)},
        lastName: {type: GraphQLNonNull(GraphQLString)},
        phoneNumber: {type: GraphQLNonNull(GraphQLString)},
        AddressId: {type: GraphQLNonNull(GraphQLID)},
    }
})

