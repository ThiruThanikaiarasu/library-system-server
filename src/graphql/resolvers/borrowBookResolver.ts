import { borrowBook, returnBook } from "../../services/borrowBookService"

interface BorrowedBookArgs {
    book: string
    user: string
}

const borrowBookResolvers = {
    Mutation: {
        borrowBook: (_: unknown, args: BorrowedBookArgs) => {
            console.log(args)
            return borrowBook(args)
        },
        returnBook: (_: unknown, args: BorrowedBookArgs) => {
            return returnBook(args)
        }
    }
}

export {
    BorrowedBookArgs,
    borrowBookResolvers
}