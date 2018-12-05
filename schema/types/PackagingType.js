import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
} from 'graphql';

import ImageType from './ImageType';

export default new GraphQLObjectType({
    name: 'Packaging',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        images: {type: new GraphQLList(ImageType),
            resolve: ()=>{
                return [{name: 'name'}]
            }
        },
        description: {type: GraphQLString},
        enabled: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});