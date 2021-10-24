import { movies } from "../../shared/movies";
import { buildSchema, graphql } from "graphql";

// SDL Schema Definition
const schemaSDL = buildSchema(`
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
`);

const root = {
  hello: () => "world",
  hi: () => "hello",
  movies: () => movies,
};

graphql(schemaSDL, "{ hi }", root).then((res) => console.log(res.data));

// Code Schema Definition
// const schemaCode = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve() {
//           return "world";
//         },
//       },
//       hi: {
//         type: GraphQLString,
//         resolve() {
//           return "hello";
//         },
//       },
//       movies: {
//         type: new GraphQLList(
//           new GraphQLObjectType({
//             name: "Movie",
//             fields: {
//               title: { type: GraphQLString },
//               director: { type: GraphQLString },
//             },
//           })
//         ),
//         resolve() {
//           return movies;
//         },
//       },
//     },
//   }),
// });
