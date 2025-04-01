import { GraphQLError } from "graphql"
import { BorrowedBookArgs } from "../graphql/resolvers/borrowBookResolver"
import { BorrowedBook } from "../models/borrowedBookModel"

const enterBorrowedBookDetailInDB = async (args: BorrowedBookArgs) => {

    const borrowedBook = new BorrowedBook({
        book: args.book,
        user: args.user,
        borrowDate: new Date(),
        status: 'Borrowed'
    })

    const savedBorrowedBook = await borrowedBook.save()
    return await savedBorrowedBook.populate('book user')
}

const enterReturnedBookDetailInDB = async (args: BorrowedBookArgs) => {
    const borrowedBook = await BorrowedBook.findOne({
        book: args.book,
        user: args.user,
    })

    if (!borrowedBook) {
        throw new GraphQLError("Borrowed book not found", {
            extensions: {
                code: "BORROWED_BOOK_NOT_FOUND",
            },
        })
    }

    if(borrowedBook.status == 'Returned') {
        throw new GraphQLError("Borrowed book already returned", {
            extensions: {
                code: "BORROWED_BOOK_ALREADY_RETURNED",
            },
        })
    }

    borrowedBook.returnDate = new Date()
    borrowedBook.status = "Returned"

    await borrowedBook.save()

    return borrowedBook
};


export {
    enterBorrowedBookDetailInDB,
    enterReturnedBookDetailInDB
}