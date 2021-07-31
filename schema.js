const queryObj = require('graphql');

exports.schema = queryObj.buildSchema(`

  type User{
    id:ID
    name:String
    email:String
  }

  type Todo{
    userId: Int,
    id: Int,
    title: String,
    completed: Boolean
  }

  input UserUpdate{
    id:ID
    name:String
    email:String
  }

  type Query{
    users:[User]
    getUser(id:ID):User
    getTodo(userId:ID):[Todo]
  }

  type Mutation{
    deleteUser(id:ID):User
    userEdit(data:UserUpdate):User
  }

`)