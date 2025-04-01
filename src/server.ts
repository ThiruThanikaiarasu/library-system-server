import dotenv from 'dotenv'
dotenv.config()

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { connectToDB } from './database/connection'
import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'


const startServer = async () => {
    try {
        await connectToDB()
        console.log('Connected to MongoDB')
    
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            introspection: true
        })
    
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        })
    
        console.log(`🚀 Server is running at ${url}`)
    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}
  
startServer()