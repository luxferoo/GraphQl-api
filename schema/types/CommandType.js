import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';
import LetterType from './LetterType';
import AddressType from './AddressType';
import CommandProductType from "./CommandProductType";

export default new GraphQLObjectType({
    name: 'Command',
    fields: {
        id: {type: GraphQLID},
        letter: {type: GraphQLString},
        commands: {type: new GraphQLList(CommandProductType),
            resolve: ()=>{
                return [{}]
            }
        },
        address: {type: AddressType,
            resolve: (parent)=>{
                console.log(parent)
            }},
        letterStyle: {type: LetterType,
            resolve: ()=>{
                return {}
            }},

        canceled: {type: GraphQLBoolean},
        deleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    }
});