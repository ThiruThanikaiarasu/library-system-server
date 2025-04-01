import { getAllAuthorsFromDB, getAuthorByIdFromDB } from "../../repositories/authorRepository"
import { createAuthor, deleteAuthor, updateAuthor } from "../../services/authorService"

interface AuthorArgs {
    id: string
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
        author: async (_: unknown, { id }: AuthorArgs) => {
            return getAuthorByIdFromDB(id)
        }
    },
    
    Mutation: {
        createAuthor: async (_: unknown, { input }: { input: AuthorInput }) => {
            return createAuthor(input)
        },
        updateAuthor: async (_: unknown, { id, input }: { id: string, input: AuthorInput }) => {
            return updateAuthor(id, input)
        },
        deleteAuthor: async (_: unknown, { id }: AuthorArgs) => {
            return deleteAuthor(id)
        }
    }
}

export {
    AuthorArgs,
    AuthorInput,
    authorResolvers
}