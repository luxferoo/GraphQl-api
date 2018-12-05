import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

import CountryType from './index';

export default new GraphQLObjectType({
    name: "CountryEdge",
    fields: () => ({
        cursor: {type: GraphQLNonNull(GraphQLString)},
        node: {type: GraphQLNonNull(CountryType)}
    })
});