import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
} from 'graphql';
import CommandType from "./CommandType";
import ProductType from "./ProductType";
import PackagingType from "./PackagingType";

export default new GraphQLObjectType({
    name: 'CommandProduct',
    fields: ()=>({
        id: {type: GraphQLID},
        command: {type: CommandType},
        product: {type: ProductType},
        packaging: {type: PackagingType},
        deleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    })
});