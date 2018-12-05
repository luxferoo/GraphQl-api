import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import PageInfo from '../PageInfo';
import CategoryEdge from "./CategoryEdge";

export default new GraphQLObjectType({
    name: 'CategoryConnection',
    fields: () => ({
        totalCount: {type: GraphQLInt},
        edges: {type: GraphQLList(CategoryEdge)},
        pageInfo: {type: GraphQLNonNull(PageInfo)}
    })
});