import { ApolloServer } from 'apollo-server'

import resolvers from './graphql/resolvers'
import { typeDefs } from './graphql/schema'

const apollo = new ApolloServer({
    typeDefs,
    resolvers
})

// by default on port 4000
apollo.listen().then(({ url }) => {
    console.log(`🚀  Apollo server ready at ${url}`)
})
