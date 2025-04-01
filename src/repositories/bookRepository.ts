import { GraphQLError } from "graphql"
import { BookInput } from "../graphql/resolvers/bookResolver"
import { Book } from "../models/bookModel"

const getAllBooksFromDB = () => {
    return Book.find().populate('author')
}

const getABookByIdFromDB = (_id: string) => {
    return Book.findById(_id).populate('author')
}

const findBookByISBN = (isbn: string) => {
    return Book.findOne({ isbn }).populate('author')
}


const createANewBookInDB = async (input: BookInput) => {
    const newBook = new Book(input)
    const savedBook = await newBook.save()
    return await savedBook.populate("author")
}

const updateBookInDB = async (_id: string, input: BookInput) => {
    const updatedBook = await Book.findByIdAndUpdate(_id, input, {
        new: true,
        runValidators: true, 
    }).populate("author")

    if (!updatedBook) {
        throw new GraphQLError("Failed to update book", {
            extensions: {
                code: "UPDATE_FAILED",
            },
        })
    }

    return updatedBook
}

const deleteBookFromDB = async (_id: string) => {
    const deletedBook = await Book.findByIdAndDelete(_id)

    if (!deletedBook) {
        throw new GraphQLError("Failed to delete book", {
            extensions: {
                code: 'DELETE_FAILED',
            }
        })
    }

    return deletedBook != null
}

export {
    getAllBooksFromDB,
    getABookByIdFromDB,
    findBookByISBN,
    createANewBookInDB,
    updateBookInDB,
    deleteBookFromDB
}