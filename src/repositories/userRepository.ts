import { User } from '../models/userModel'
import { hashPassword } from '../utils/authUtils'

const getAllUsers = () => {
    return User.find()
}

const getUserById = (_id: string) => {
    return User.findById(_id)
}

const getUserByEmailFromDB = (email: string) => {
    return User.findOne({ email })
}

const createUserInDB = async (input: { name: string, email: string, password: string }) => {
    const hashedPassword = await hashPassword(input.password) 
    const user = new User({
        name: input.name,
        email: input.email,
        password: hashedPassword  
    })

    await user.save()
    return user
}

export {
    getAllUsers,
    getUserById,
    getUserByEmailFromDB,
    createUserInDB,
}