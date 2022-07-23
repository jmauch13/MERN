const express = require('express');
const { ApolloServer } = require('apollo-server-express');

//import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 3001;
//create a new Apollo server amd pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});
app.use(cors());
app.use(express.json());
//Create a new instance of an Apollo server with the GraphQl schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    //integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });

    dbo.connectToServer('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        //log where we can go to test our GQL API
        console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    })
})
};
app.use(require('./routes/record'));
// get driver connection
const dbo = require('./db/conn');

//call the async function to start the server
startApolloServer(typeDefs, resolvers);