import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Product {
       id: ID
       product: String
       description: String
       price: String
    }
    
    input ProductInput {
        id: ID
        product: String
        description: String
        price: String
    }

    type Query {
        getAllProducts:[Product]
    }

    type Mutation{
        createProduct(
        product: String
        description: String
        price: String): Product
    }
`;
