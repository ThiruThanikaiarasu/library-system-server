import { GraphQLError } from "graphql"

import { BorrowedBookArgs } from "../graphql/resolvers/borrowBookResolver"
import { getABookByIdFromDB } from "../repositories/bookRepository"
import { getUserById } from "../repositories/userRepository"
import { enterBorrowedBookDetailInDB, enterReturnedBookDetailInDB } from "../repositories/borrowBookRepository"


const borrowBook = async (args: BorrowedBookArgs) => {
    const user = await getUserById(args.user) 
    if(!user) {
        throw new GraphQLError("User not found", {
            extensions: {
                code: "USER_NOT_FOUND",
            },
        })
    }

    const book = await getABookByIdFromDB(args.book)
    if(!book) {
        throw new GraphQLError("Book not found", {
            extensions: {
                code: "BOOK_NOT_FOUND",
            },
        })
    }

    return enterBorrowedBookDetailInDB(args)
}

const returnBook = async (args: BorrowedBookArgs) => {
    const user = await getUserById(args.user) 
    if(!user) {
        throw new GraphQLError("User not found", {
            extensions: {
                code: "USER_NOT_FOUND",
            },
        })
    }

    const book = await getABookByIdFromDB(args.book)
    if(!book) {
        throw new GraphQLError("Book not found", {
            extensions: {
                code: "BOOK_NOT_FOUND",
            },
        })
    }

    return enterReturnedBookDetailInDB(args)
}

export {
    borrowBook,
    returnBook
}