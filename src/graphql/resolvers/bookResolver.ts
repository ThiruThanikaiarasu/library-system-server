import { getABookByIdFromDB, getAllBooksFromDB } from "../../repositories/bookRepository"
import { addBook, deleteBook, updateBook } from "../../services/bookService"

interface BookArgs {
    _id: string
}

interface BookInput {
    title: string
    isbn: string
    author: string
    publishedYear: number
    genre: string
    available?: boolean
}

const bookResolvers = {
    Query: {
        books: () => {
            return getAllBooksFromDB()
        },
        book: (_: unknown, { _id }: BookArgs) => {
            return getABookByIdFromDB(_id)
        }
    },

    Mutation: {
        addBook: (_: unknown, { input }: { input: BookInput}) => {
            return addBook(input)    
        },

        updateBook: (_: unknown, { _id, input }: { _id: string, input: BookInput}) => {
            return updateBook(_id, input)
        },

        deleteBook: (_: unknown, { _id }: BookArgs) => {
            return deleteBook(_id)
        }
    }
} 

export {
    BookInput,
    bookResolvers
}