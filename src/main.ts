import { readFileSync } from 'node:fs'
import express from 'express'
import { createServer } from '@graphql-yoga/node'
import { resolvers } from './resolvers'
import path from 'path'

const app = express()

const schema = path.join(process.cwd(), 'src', 'schema.graphql')
const typeDefs = readFileSync(schema, 'utf8')

const graphQLServer = createServer({
  schema: {
    resolvers,
    typeDefs
  }
})

app.use('/', graphQLServer)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
