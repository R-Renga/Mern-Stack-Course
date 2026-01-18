export const typeDefs = `#graphql

type Book {
    id: ID!
    name: String!
    publishedyear: Int,
    author:Author
}

type Author {
    id: ID!
    authorname: String!
    book : [Book]

}

type Query {
    books: [Book]
    authors: [Author]
    }

    type Mutation {
        AddBook(name: String!, publishedyear: Int, author: ID!): Book!
    }
`;


