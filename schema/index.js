import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import mutations from './mutations';
import queries from './queries';

let query = new GraphQLObjectType({
    name: 'Query',
    fields: queries
});
let mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
});

export default new GraphQLSchema({
    query,
    mutation
});