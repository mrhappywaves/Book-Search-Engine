const { gql } = require("apollo-server-express");

const typedefs = gql`

type Book {
  _id: ID!
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

input savedBook {
  description: String
  title: String
  bookId: String
  image: String
  link: String
  authors: [String]
}

type User {
  _id: ID!
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Query {
  me: User  
}

type Mutation {
  login(email: String!, password: String!): Auth
  createUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: savedBook!): User
  deleteBook(bookId: ID!): User
}

type Auth {
  token: ID!
  user: User
}
`;

module.exports = typedefs;