"use strict";

const { createClient } = require("./generated");

const client = createClient({
  url: "http://localhost:7001/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "myadminsecretkey",
  },
});

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      await client.query({
        movies: {
          id: 1,
          title: 1,
          director: 1,
        },
      })
    ),
    headers: {
      "content-type": "application/json",
    },
  };
};
