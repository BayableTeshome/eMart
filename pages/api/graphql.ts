import { ApolloServer } from "apollo-server-micro"; 
import Cors from "micro-cors";

const cors = Cors();

import { schema } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../graphql/context";

const apolloServer = new ApolloServer({schema, resolvers, context: createContext});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
    if (req.method == 'OPTIONS') {
        res.end();
        return false;
    }
    await startServer;
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

// const handler = apolloServer.createHandler({path: "/api/graphql"});

export const config = {
    api: {
        bodyParser: false,
    }
};

// export default handler;