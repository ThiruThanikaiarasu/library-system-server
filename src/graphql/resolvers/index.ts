import { authorResolvers } from "./authorResolver"
import { userResolvers } from "./userResolver"

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...authorResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...authorResolvers.Mutation
    }
}

export {
    resolvers
}