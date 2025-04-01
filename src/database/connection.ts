import mongoose from 'mongoose'

import { MONGODB_URL } from '../utils/config'


const connectToDB = async () => {
    try {
        if(!MONGODB_URL) {
            throw new Error('MONGODB_URL environment variable is required')
        }
        await mongoose.connect(MONGODB_URL)
    }
    catch(error) {
        console.log('Failed to Connect DB: ', error)
        process.exit(1)
    }
} 

export {
    connectToDB
}