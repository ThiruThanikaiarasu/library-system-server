import { GraphQLError } from "graphql"

import { AuthorInput } from "../graphql/resolvers/authorResolver"
import { Author } from "../models/authorModel"

const getAllAuthorsFromDB = () => {
    return Author.find()
}

const getAuthorByEmailFromDB = (email: string) => {
    return Author.findOne({ email })
}

const getAuthorByIdFromDB = (id: string) => {
    return Author.findById(id)
}

const createANewAuthorInDB = (input: AuthorInput) => {
    return Author.create(input)
}

const updateAuthorInDB = async (id: string, input: AuthorInput) => {
    const updatedAuthor = await Author.findByIdAndUpdate(id, input, { new: true })

    if (!updatedAuthor) {
        throw new GraphQLError("Failed to update author", {
            extensions: {
                code: 'UPDATE_FAILED',
            }
        })
    }

    return updatedAuthor
}

const deleteAuthorFromDB = async (id: string) => {
    const deletedAuthor = await Author.findByIdAndDelete(id)

    if (!deletedAuthor) {
        throw new GraphQLError("Failed to delete author", {
            extensions: {
                code: 'DELETE_FAILED',
            }
        })
    }

    return deletedAuthor !== null
}

export {
    getAllAuthorsFromDB,
    getAuthorByEmailFromDB,
    getAuthorByIdFromDB,
    createANewAuthorInDB,
    updateAuthorInDB,
    deleteAuthorFromDB
}