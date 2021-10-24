import { movies } from "../../shared/";
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const schema = gql`
  type Query {
    hello: String
    hi: String
    movies: [Movie]
  }

  type Movie {
    id: ID
    title: String
    director: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
    hi: () => "hello",
    movies: () => movies,
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
