import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import PageInfo from '../PageInfo';
import CountryEdge from "./CountryEdge";

export default new GraphQLObjectType({
    name: 'CountryConnection',
    fields: () => ({
        totalCount: {type: GraphQLInt},
        edges: {type: GraphQLList(CountryEdge)},
        pageInfo: {type: GraphQLNonNull(PageInfo)}
    })
});