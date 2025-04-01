import { getAllUsers, getUserById } from '../../repositories/userRepository'
import { createUser } from '../../services/userService'

interface UserArgs {
    _id: string
}

interface CreateUserArgs {

    name: string
    email: string
    password: string

}

const userResolvers = {
    Query: {
        users: async () => {
            return await getAllUsers()
        },
        user: async(_: unknown, { _id } : UserArgs) => {
            return await getUserById(_id)
        }
    },

    Mutation: {
        createUser: async (_: unknown, { input }: { input: CreateUserArgs}) => {
            return await createUser(input)
        },
    },
}

export {
    CreateUserArgs,
    userResolvers
}