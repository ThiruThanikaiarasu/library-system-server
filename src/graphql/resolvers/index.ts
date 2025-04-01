import { authorResolvers } from "./authorResolver"
import { bookResolvers } from "./bookResolver"
import { userResolvers } from "./userResolver"

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...authorResolvers.Query,
        ...bookResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...authorResolvers.Mutation,
        ...bookResolvers.Mutation
    }
}

export {
    resolvers
}