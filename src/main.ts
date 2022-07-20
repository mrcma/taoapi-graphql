import { readFileSync } from 'node:fs'
import express from 'express'
import { createServer } from '@graphql-yoga/node'
import { resolvers } from './resolvers'

const app = express()

const typeDefs = readFileSync('./src/schema.graphql', 'utf8')

const graphQLServer = createServer({
  schema: {
    resolvers,
    typeDefs
  }
})

app.use('/graphql', graphQLServer)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
