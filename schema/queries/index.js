import types from '../types';
import connectionsResolver from "./connectionsResolver";
import loginResolver from "./loginResolver";
import commonResolver from "./commonResolver";
import models from '../../models';
import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} from 'graphql';
import commandsResolver from "./commandsResolver";
import addressesResolver from "./addressesResolver";


let security = {
    login: {
        type: types.AuthType,
        args: {
            email: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)},
        },
        resolve: loginResolver
    },
};

export default {
    ...security,
    user: {
        type: types.UserType,
        resolve(p, a, context) {
            return context.user;
        }
    },
    countries: {
        type: types.CountryConnection,
        args: {
            first: {type: GraphQLInt},
            before: {type: GraphQLString},
            after: {type: GraphQLString},
            name: {type: GraphQLString},
        },
        resolve: (_,{first, before, after,name} ,{lang}) =>
            connectionsResolver(models.Country,_,{first, before, after,name} ,{lang})
    },
    categories: {
        type: types.CategoryConnection,
        args: {
            first: {type: GraphQLInt},
            before: {type: GraphQLString},
            after: {type: GraphQLString},
            name: {type: GraphQLString},
        },
        resolve: (_,{first, before, after,name} ,{lang}) =>
            connectionsResolver(models.Category,_,{first, before, after,name} ,{lang})
    },
    products: {
        type: types.ProductConnection,
        args: {
            first: {type: GraphQLInt},
            before: {type: GraphQLString},
            after: {type: GraphQLString},
            name: {type: GraphQLString},
        },
        resolve: (_,{first, before, after,name} ,{lang}) =>
            connectionsResolver(models.Category,_,{first, before, after,name} ,{lang})
    }
    ,
    letters: {
        type: new GraphQLList(types.LetterType),
        resolve: (parent, {limit, offset},{lang}) =>
            commonResolver(models.Letter, parent, {limit, offset},{lang})

    }
    ,
    packages: {
        type: new GraphQLList(types.PackagingType),
        resolve: (parent, {limit, offset},{lang}) =>
            commonResolver(models.Package, parent, {limit, offset},{lang})
    }
    ,
    commands: {
        type: new GraphQLList(types.CommandType),
        resolve: commandsResolver
    }
    ,
    addresses: {
        type: new GraphQLList(types.CommandType),
        resolve: addressesResolver
    }
}