const connectToMongoDB = require("../Configs/db");


// post user information 
const createUser = async (query, userData) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("gameit").collection("users");

  const existingUser = await userCollection.findOne(query);
  if (existingUser) {
    return { message: "user already exists" };
  }
  const result = await userCollection.insertOne(userData);
  return result;
};

// single user get
const singleUser = async (query) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("gameit").collection("users");
  const user = await userCollection.findOne(query)
  return user;
};
// check admin users
const adminCheck = async (query) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("gameit").collection("users");
  const user = await userCollection.findOne(query);
  return user;
};

module.exports = {
  createUser,
  adminCheck,
  singleUser
};
