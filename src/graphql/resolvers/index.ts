import { authorResolvers } from "./authorResolver"
import { bookResolvers } from "./bookResolver"
import { borrowBookResolvers } from "./borrowBookResolver"
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
        ...bookResolvers.Mutation,
        ...borrowBookResolvers.Mutation
    }
}

export {
    resolvers
}