import types from '../types';
import inputs from '../inputs';
import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
} from 'graphql';
import registerResolver from './registerResolver';
import editUserResolver from "./editUserResolver";
import changePasswordResolver from "./changePasswordResolver";
import createCommandResolver from "./createCommandResolver";
import createAddressResolver from "./createAddressResolver";

const security = {
    register: {
        method: 'POST',
        type: types.AuthType,
        args: {
            email: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)},
            confirmPassword: {type: GraphQLNonNull(GraphQLString)}
        },
        resolve: registerResolver
    },
    editUser: {
        method: 'POST',
        type: types.UserType,
        args: {
            user: {type: GraphQLNonNull(inputs.UserEditInputType)},
        },
        resolve: editUserResolver
    },
    changePassword: {
        method: 'POST',
        type: GraphQLString,
        args: {
            password: {type: GraphQLNonNull(GraphQLString)},
            newPassword: {type: GraphQLNonNull(GraphQLString)},
            confirmPassword: {type: GraphQLNonNull(GraphQLString)},
        },
        resolve: changePasswordResolver
    },
};

const command = {
    createCommand: {
        method: 'POST',
        type: types.CommandType,
        args: {
            input: {type: GraphQLNonNull(inputs.CommandInputType)}
        },
        resolve: createCommandResolver
    },
    deleteCommand: {
        method: 'POST',
        type: GraphQLString,
        args: {
            CommandId: {type: GraphQLNonNull(GraphQLID)}
        },
        resolve: (_, args, context) => {
            return {}
        }
    },
};


const address = {
    createAddress: {
        method: 'POST',
        type: types.AddressType,
        args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            address: {type: GraphQLNonNull(GraphQLString)},
            firstName: {type: GraphQLNonNull(GraphQLString)},
            lastName: {type: GraphQLNonNull(GraphQLString)},
            phoneNumber: {type: GraphQLNonNull(GraphQLString)},
            postCode: {type: GraphQLNonNull(GraphQLInt)},
        },
        resolve: createAddressResolver
    }
};


export default {
    ...command,
    ...security,
    ...address
}