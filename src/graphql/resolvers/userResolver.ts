import { createUserInDB, getAllUsers, getUserById } from '../../repositories/userRepository'

interface UserArgs {
    id: string
}

interface CreateUserArgs {
    input: {
        name: string
        email: string
        password: string
    }
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
        createUser: async (_: unknown, { input }: CreateUserArgs) => {
            return await createUserInDB(input)
        },
    },
}

export {
    userResolvers
}