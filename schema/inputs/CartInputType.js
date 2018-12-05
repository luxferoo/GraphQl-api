import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'CartInputType',
    fields: {
        ProductId: {type: (GraphQLNonNull(GraphQLID))},
        PackageId: {type: (GraphQLNonNull(GraphQLID))},
        quantity: {type: (GraphQLNonNull(GraphQLInt))}
    }
})

