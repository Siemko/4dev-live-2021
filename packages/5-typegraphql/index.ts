import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { printSchema } from "graphql";
import "reflect-metadata";
import {
  buildSchema,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { movies, TMovie } from "../../shared";
import { writeFile } from "fs/promises";

@ObjectType()
class Movie implements TMovie {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  director: string;
}

@Resolver(Movie)
class MovieResolver {
  @Query(() => [Movie])
  movies() {
    return movies;
  }
}

@Resolver()
class TextResolver {
  @Query(() => String)
  hello() {
    return "world";
  }

  @Query(() => String)
  hi() {
    return "hello";
  }
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [MovieResolver, TextResolver],
  });

  const sdl = printSchema(schema);
  await writeFile(__dirname + "/schema.graphql", sdl);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

bootstrap();
