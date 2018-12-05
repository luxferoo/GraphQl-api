import {
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

import types from '../types';

export default new GraphQLObjectType({
    name: 'Auth',
    fields: ()=>({
        token: {type: GraphQLString},
        user: {type: types.UserType}
    })
});