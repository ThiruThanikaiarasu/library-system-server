import { GraphQLError } from "graphql"
import { BookInput } from "../graphql/resolvers/bookResolver"
import { createANewBookInDB, deleteBookFromDB, findBookByISBN, getABookByIdFromDB, updateBookInDB } from "../repositories/bookRepository"

const addBook = async (input: BookInput) => {
    const existingBook = await findBookByISBN(input.isbn)
    if(existingBook) {
        throw new GraphQLError("Book already exists with this ISBN", {
            extensions: {
                code: 'BOOK_EXISTS'
            }
        })
    }

    return createANewBookInDB(input)
}

const updateBook = async (_id: string, input: BookInput) => {
    const existingBook = await getABookByIdFromDB(_id)

    if (!existingBook) {
        throw new GraphQLError("Book not found", {
            extensions: {
                code: "BOOK_NOT_FOUND",
            },
        })
    }

    if (input.isbn && existingBook.isbn !== input.isbn) {
        const isbnExists = await findBookByISBN(input.isbn)
        if (isbnExists) {
            throw new GraphQLError("ISBN is already taken", {
                extensions: {
                    code: "ISBN_ALREADY_EXISTS",
                },
            })
        }
    }

    return updateBookInDB(_id, input)
}

const deleteBook = async (_id: string) => {
    const existingBook = await getABookByIdFromDB(_id)

    if (!existingBook) {
        throw new GraphQLError("Book not found", {
            extensions: {
                code: 'BOOK_NOT_FOUND',
            }
        })
    }

    return deleteBookFromDB(_id)
}

export {
    addBook,
    updateBook,
    deleteBook
}