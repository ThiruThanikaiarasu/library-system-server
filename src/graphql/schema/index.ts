const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        users: [User!]!
        user(id: String!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

`

export {
    typeDefs
}