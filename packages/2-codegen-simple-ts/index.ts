import { Resolvers } from "./resolvers";

export const resolvers: Resolvers = {
  Query: {
    continents: () => [
      {
        name: "Africa",
        code: "AF",
      },
    ],
    countries: () => [
      {
        name: "Afghanistan",
        code: "AF",
        capital: "Kabul",
      },
    ],
  },
};

console.log(resolvers)