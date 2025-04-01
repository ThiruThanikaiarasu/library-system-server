import { GraphQLError } from "graphql"

import { AuthorInput } from "../graphql/resolvers/authorResolver"
import { createANewAuthorInDB, deleteAuthorFromDB, getAuthorByEmailFromDB, getAuthorByIdFromDB, updateAuthorInDB } from "../repositories/authorRepository"

const createAuthor = async (input: AuthorInput) => {
    const existingAuthor = await getAuthorByEmailFromDB(input.email)

    if(existingAuthor) {
        throw new GraphQLError("Author already exists with this email", {
            extensions: {
                code: 'AUTHOR_EXISTS',
            }
        })
    }

    return createANewAuthorInDB(input)

}

const updateAuthor = async (id: string, input: AuthorInput) => {
    const existingAuthor = await getAuthorByIdFromDB(id)

    if (!existingAuthor) {
        throw new GraphQLError("Author not found", {
            extensions: {
                code: 'AUTHOR_NOT_FOUND',
            }
        })
    }

    if (existingAuthor.email !== input.email) {
        const emailExists = await getAuthorByEmailFromDB(input.email)
        if (emailExists) {
            throw new GraphQLError("Author already exists with this email", {
                extensions: {
                    code: 'AUTHOR_EXISTS',
                }
            })
        }
    }

    return updateAuthorInDB(id, input)
}

const deleteAuthor = async (id: string) => {
    const existingAuthor = await getAuthorByIdFromDB(id)

    if (!existingAuthor) {
        throw new GraphQLError("Author not found", {
            extensions: {
                code: 'AUTHOR_NOT_FOUND',
            }
        })
    }

    return deleteAuthorFromDB(id)
}

export {
    createAuthor,
    updateAuthor,
    deleteAuthor
}