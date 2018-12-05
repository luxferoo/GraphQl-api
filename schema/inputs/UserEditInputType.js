import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserEditInputType',
    fields: {
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        birthDay: {type: GraphQLString},
        address: {type: GraphQLString},
        postCode: {type: GraphQLString},
    }
})