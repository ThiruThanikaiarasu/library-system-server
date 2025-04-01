import mongoose, { Schema, Document } from 'mongoose'

export interface IBook extends Document {
    title: string
    isbn: string
    author: mongoose.Types.ObjectId
    publishedYear: number 
    genre: string 
    available: boolean
    createdAt: Date 
    updatedAt: Date 
}

const bookSchema = new Schema<IBook>(
    {
        title: {
            type: String, 
            required: [true, "Book's Title is a mandatory field"]
        },
        isbn: {
            type: String, 
            required: [true, "Book's ISBN is a mandatory field"]
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'authors'
        },
        publishedYear: {
            type: Number,
            required: [true, "Book's Published Year is a mandatory field"]
        },
        genre: {
            type: String, 
            required: [true, "Book's Genre is a mandatory field"]
        },
        available: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true, 
        collection: 'books'
    }
)

export const Book = mongoose.model<IBook>('books', bookSchema)
