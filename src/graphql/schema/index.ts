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

    type BorrowedBook {
        _id: ID!
        book: Book!
        user: User!
        borrowDate: String!
        returnDate: String
        status: String!
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
        createAuthor(input: AuthorInput!): Author!
        updateAuthor(_id: ID!, input: AuthorInput!): Author!
        deleteAuthor(_id: ID!): Boolean!
        addBook(input: BookInput!): Book!
        updateBook(_id: ID!, input: BookInput!): Book!
        deleteBook(_id: ID!): Boolean!
        borrowBook(book: ID!, user: ID!): BorrowedBook!
        returnBook(book: ID!, user: ID!): BorrowedBook!
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