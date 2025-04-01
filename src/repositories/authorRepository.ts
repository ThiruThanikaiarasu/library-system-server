import { GraphQLError } from "graphql"

import { AuthorInput } from "../graphql/resolvers/authorResolver"
import { Author } from "../models/authorModel"

const getAllAuthorsFromDB = () => {
    return Author.find()
}

const getAuthorByEmailFromDB = (email: string) => {
    return Author.findOne({ email })
}

const getAuthorByIdFromDB = (_id: string) => {
    return Author.findById(_id)
}

const createANewAuthorInDB = (input: AuthorInput) => {
    return Author.create(input)
}

const updateAuthorInDB = async (_id: string, input: AuthorInput) => {
    const updatedAuthor = await Author.findByIdAndUpdate(_id, input, { new: true })

    if (!updatedAuthor) {
        throw new GraphQLError("Failed to update author", {
            extensions: {
                code: 'UPDATE_FAILED',
            }
        })
    }

    return updatedAuthor
}

const deleteAuthorFromDB = async (_id: string) => {
    const deletedAuthor = await Author.findByIdAndDelete(_id)

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