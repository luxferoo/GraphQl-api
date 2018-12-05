import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

import CategoryType from './index';

export default new GraphQLObjectType({
    name: "CategoryEdge",
    fields: () => ({
        cursor: {type: GraphQLNonNull(GraphQLString)},
        node: {type: GraphQLNonNull(CategoryType)}
    })
});