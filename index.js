const express = require('express');
const app = express();
const expressGraphQl = require('express-graphql');
const { resolvers } = require('./resolvers');
const { schema } = require('./schema');

app.use('/gql',expressGraphQl.graphqlHTTP({
   schema,
   rootValue: resolvers,
   graphiql: true
}))

app.listen(3000,(err)=>{
  if(err) console.log(err);
  else console.log('Server on port 3000')
})