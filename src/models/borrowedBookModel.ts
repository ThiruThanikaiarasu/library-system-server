import mongoose, { Document, Schema } from "mongoose"

export type BorrowedBookStatus = 'Borrowed' | 'Returned';

export interface IBorrowBook extends Document {
    book: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    borrowDate: Date
    returnDate: Date
    status: String
}


const borrowedBookSchema = new Schema<IBorrowBook>(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'books'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        borrowDate: {
            type: Date,
            required: [true, 'Borrow Date is a mandatory field']    
        },
        returnDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: ['Borrowed', 'Returned'],
            default: 'Borrowed'
        }
    },
    {
        timestamps: true,
        collection: 'borrowedBooks'
    }
)

export const BorrowedBook = mongoose.model<IBorrowBook>('borrowedBooks', borrowedBookSchema)