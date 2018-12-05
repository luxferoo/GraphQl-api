import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
    name: "PageInfo",
    fields: () => ({
        endCursor: {type: GraphQLNonNull(GraphQLString)},
        firstCursor: {type: GraphQLNonNull(GraphQLString)},
        hasNextPage: {type: GraphQLNonNull(GraphQLBoolean)}
    })
});