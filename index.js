import { GraphQLServer } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Todo } from './resolvers/Todo.js';
import { User } from './resolvers/User.js';

// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "schema/schema.graphql";
const resolvers = {
    Query,Todo, User};
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
