import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'image',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        url: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
})