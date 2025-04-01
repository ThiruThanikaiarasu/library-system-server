import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

const userSchema = new Schema<IUser>(
    {
        name: { 
            type: String, 
            required: [true, 'User name is required'],
            minlength: [2, 'Name must be at least 2 characters long'], 
        },
        email: { 
            type: String, 
            required: [true, 'Email is required'],
            unique: true,
            trim: true 
        },
        password: {
            type: String, 
            required: [true, 'Password is required'],
            select: false,
            minlength: [8, 'Password must be at least 8 characters long'],
        }
    }, 
    {
        timestamps: true,
        collection: 'users'
    }
)

export const User = mongoose.model<IUser>('users', userSchema)