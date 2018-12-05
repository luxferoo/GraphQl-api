import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import PageInfo from '../PageInfo';
import ProductEdge from "./ProductEdge";

export default new GraphQLObjectType({
    name: 'ProductConnection',
    fields: () => ({
        totalCount: {type: GraphQLInt},
        edges: {type: GraphQLList(ProductEdge)},
        pageInfo: {type: GraphQLNonNull(PageInfo)}
    })
});