import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

import ProductType from './index';

export default new GraphQLObjectType({
    name: "ProductEdge",
    fields: () => ({
        cursor: {type: GraphQLNonNull(GraphQLString)},
        node: {type: GraphQLNonNull(ProductType)}
    })
});