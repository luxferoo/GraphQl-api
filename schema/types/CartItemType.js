import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt,
} from 'graphql';

import PackagingType from './PackagingType';
import ProductType from './ProductType';

export default new GraphQLObjectType({
    name: 'CartItem',
    fields: {
        id: {type: GraphQLID},
        quantity: {type: GraphQLInt},
        package: {type: PackagingType},
        product: {type: ProductType},
        canceled: {type: GraphQLBoolean},
        deleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});