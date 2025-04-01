const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    type Author {
        id: ID!
        name: String!
        email: String!
        bio: String
    }

    type Query {
        users: [User!]!
        user(id: String!): User
    }

    type Query {
        authors: [Author!]!
        author(id: ID!): Author
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }

    type Mutation {
        createAuthor(input: AuthorInput!): Author!
        updateAuthor(id: ID!, input: AuthorInput!): Author!
        deleteAuthor(id: ID!): Boolean!
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    input AuthorInput {
        name: String!
        email: String!
        bio: String
    }
`

export {
    typeDefs
}