import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';
import AddressType from './AddressType';
import CommandType from "./CommandType";
import FavoriteType from "./FavoriteType";

export default new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLID},
        email: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        birthDay: {type: GraphQLString},
        refreshToken: {type: GraphQLString},
        favorites: {type: new GraphQLList(FavoriteType),
            resolve: ()=>{
                return [{}]
            }
        },
        commands: {type: new GraphQLList(CommandType),
            resolve: ()=>{
                return [{}]
            }
        },
        address: {type: GraphQLString},
        postCode: {type: GraphQLString},
        addresses: {type: GraphQLList(AddressType),
            resolve: ()=>{
                return [{
                    id: "sdf",
                    name: "qdfsdf",
                    address: "sdfsdf",
                    postCode: 1000,
                    deleted: false,
                    createdAt: "sdfsdf",
                    updatedAt: "sdfsdf",
                }]
            }
        },
        activated: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});