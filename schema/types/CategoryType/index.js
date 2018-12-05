import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
} from 'graphql';
import ProductType from "../ProductType";

export default new GraphQLObjectType({
    name: 'Category',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        nameAr: {type: GraphQLString},
        nameFr: {type: GraphQLString},
        products: {type: new GraphQLList(ProductType),
            resolve: ()=>{
                return [{}]
            }
        },
        enabled: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    })
});