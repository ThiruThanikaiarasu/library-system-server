import { getAllAuthorsFromDB, getAuthorByIdFromDB } from "../../repositories/authorRepository"
import { createAuthor, deleteAuthor, updateAuthor } from "../../services/authorService"

interface AuthorArgs {
    _id: string
}

interface AuthorInput {
    name: string
    email: string
    bio?: string
}

const authorResolvers = {
    Query: {
        authors: async () => {
            return getAllAuthorsFromDB()
        },
        author: async (_: unknown, { _id }: AuthorArgs) => {
            return getAuthorByIdFromDB(_id)
        }
    },
    
    Mutation: {
        createAuthor: async (_: unknown, { input }: { input: AuthorInput }) => {
            return createAuthor(input)
        },
        updateAuthor: async (_: unknown, { _id, input }: { _id: string, input: AuthorInput }) => {
            return updateAuthor(_id, input)
        },
        deleteAuthor: async (_: unknown, { _id }: AuthorArgs) => {
            return deleteAuthor(_id)
        }
    }
}

export {
    AuthorArgs,
    AuthorInput,
    authorResolvers
}