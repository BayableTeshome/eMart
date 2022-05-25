import { makeSchema } from "nexus";
import { join } from "path";

import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus_typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
});

// import { gql } from "apollo-server-micro";

// export const typeDefs = gql`
//   type Product {
//     id: String
//     productName: String
//     description: String
//     price: String
//     image: String
//   }

//   type Query {
//     products: [Product]!
//   }
// `;
