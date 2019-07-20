const { gql } = require('apollo-server-express');

const schema = gql`

type Query {
    
    getnames: [Names!],
}


type Names{
    
    id: ID!,
    name: String!
}

`;

module.exports = schema;