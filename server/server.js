const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

//import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db= require('./db/conn');

const PORT = process.env.PORT || 3001;
const app = express();
//create a new Apollo server amd pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//Create a new instance of an Apollo server with the GraphQl schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    //integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        //log where we can go to test our GQL API
        console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    })
})
};


//call the async function to start the server
startApolloServer(typeDefs, resolvers);