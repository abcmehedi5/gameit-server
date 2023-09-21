const connectToMongoDB = require("../Configs/db");

// post user information
const updateScore = async (updateScore, query) => {
  console.log(query, updateScore);
  const client = await connectToMongoDB();
  const userCollection = client.db("gameit").collection("users");

  const result = await userCollection.updateOne(updateScore, query);
  return result;
};

//  update game level
const updateLevel = async (query, updateLevel) => {
  const client = await connectToMongoDB();
  const userCollection = client.db("gameit").collection("users");

  const result = await userCollection.updateOne(updateLevel, query);
  return result;
};


module.exports = {
  updateScore,
  updateLevel
};
