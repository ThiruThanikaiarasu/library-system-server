import { userResolvers } from "./userResolver";

const resolvers = {
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}

export {
    resolvers
}