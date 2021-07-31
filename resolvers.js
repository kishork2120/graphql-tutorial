const fetch = require('node-fetch')
let userData = [{
  email: "user1@example.com",
  id: 1,
  name: "user1"
}, {
  email: "user2@example.com",
  id: 2,
  name: "user2"
}, {
  email: "user3@example.com",
  id: 3,
  name: "user3"
}, {
  email: "user4@example.com",
  id: 4,
  name: "user4"
}, {
  email: "user5@example.com",
  id: 5,
  name: "user5"
}, {
  email: "user6@example.com",
  id: 6,
  name: "user6"
}, {
  email: "user7@example.com",
  id: 7,
  name: "user7"
}, {
  email: "user8@example.com",
  id: 8,
  name: "user8"
}, {
  email: "user9@example.com",
  id: 9,
  name: "user9"
}, {
  email: "user10@example.com",
  id: 10,
  name: "user10"
}];
exports.resolvers = {
  users(){
    return userData
  },
  getUser({ id }) {
    return userData.find(data=>data.id == id);
  },
  getTodo({userId}){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then((data)=>data.json())
  },
  deleteUser({id}){
    let deletedUser = userData.find(data=>data.id == id);
    userData.splice(userData.findIndex(data=>data.id == id),1);
    return deletedUser;
  },
  userEdit({data}){
    userData[userData.findIndex(user=>user.id == data.id)] = data;
    return data;
  }
}