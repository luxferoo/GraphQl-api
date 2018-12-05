import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
} from 'graphql';
import CategoryType from "../CategoryType";

export default new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        nameAr: {type: GraphQLString},
        nameFr: {type: GraphQLString},
        description: {type: GraphQLString},
        category: {
            type: CategoryType,
            resolve: (parent, _, {models}) => {
                try {
                    return models.Category.findOne({where: {id: parent.CategoryId}});
                }
                catch (e) {
                    return null;
                }
            }
        },
        enabled: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});