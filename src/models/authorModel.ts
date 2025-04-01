import mongoose, { Schema, Document } from 'mongoose'

export interface IAuthor extends Document {
    name: string
    email: string
    bio?: string
}

const AuthorSchema: Schema = new Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Author name is a mandatory field'] 
        },
        email: {
            type: String,
            required: [true, 'Author Email is a mandatory field'],
            unique: true,
            trim: true,
        },
        bio: { 
            type: String 
        },
    },
    {
        timestamps: true,
        collection: 'authors'
    }
)

export const Author = mongoose.model<IAuthor>('authors', AuthorSchema)