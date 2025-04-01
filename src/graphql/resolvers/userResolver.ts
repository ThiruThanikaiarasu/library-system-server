import { getAllUsers, getUserById } from '../../repositories/userRepository'
import { createUser } from '../../services/userService'

interface UserArgs {
    id: string
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
        user: async(_: unknown, { id } : UserArgs) => {
            return await getUserById(id)
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