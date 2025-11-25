import { createSchema, createYoga } from 'graphql-yoga';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';

const schema = createSchema({
  typeDefs,
  resolvers
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});

export async function POST(request: Request) {
  return handleRequest(request, {});
}

export async function GET(request: Request) {
  return handleRequest(request, {});
}
