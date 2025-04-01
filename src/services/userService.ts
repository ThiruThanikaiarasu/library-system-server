import { GraphQLError } from "graphql";
import { CreateUserArgs } from "../graphql/resolvers/userResolver";
import { createUserInDB, getUserByEmailFromDB } from "../repositories/userRepository";

const createUser = async (input: CreateUserArgs) => {
    const existingUser = await getUserByEmailFromDB(input.email)
    
    if(existingUser) {
        throw new GraphQLError("User already exists with this email", {
            extensions: {
                code: 'USER_EXISTS',
            }
        })
    }

    return createUserInDB(input)
}

export {
    createUser
}