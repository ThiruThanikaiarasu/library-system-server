const typeDefs = `
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    type Author {
        _id: ID!
        name: String!
        email: String!
        bio: String
    }

    type Book {
        _id: ID!
        title: String!
        isbn: String!
        author: Author!
        publishedYear: Int!
        genre: String!
        available: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        users: [User!]!
        user(_id: String!): User
    }

    type Query {
        authors: [Author!]!
        author(_id: ID!): Author
    }

    type Query {
        books: [Book!]!
        book(_id: ID!): Book!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
    }

    type Mutation {
        createAuthor(input: AuthorInput!): Author!
        updateAuthor(_id: ID!, input: AuthorInput!): Author!
        deleteAuthor(_id: ID!): Boolean!
    }

    type Mutation {
        addBook(input: BookInput!): Book!
        updateBook(_id: ID!, input: BookInput!): Book!
        deleteBook(_id: ID!): Boolean!
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

    input BookInput {
        title: String!
        isbn: String!
        author: ID!
        publishedYear: Int!
        genre: String!
        available: Boolean
    }
`

export {
    typeDefs
}