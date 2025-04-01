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

const updateAuthor = async (_id: string, input: AuthorInput) => {
    const existingAuthor = await getAuthorByIdFromDB(_id)

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

    return updateAuthorInDB(_id, input)
}

const deleteAuthor = async (_id: string) => {
    const existingAuthor = await getAuthorByIdFromDB(_id)

    if (!existingAuthor) {
        throw new GraphQLError("Author not found", {
            extensions: {
                code: 'AUTHOR_NOT_FOUND',
            }
        })
    }

    return deleteAuthorFromDB(_id)
}

export {
    createAuthor,
    updateAuthor,
    deleteAuthor
}