const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const UserRoute = require("./src/routes/userRoute");
const gameRoute = require("./src/routes/gameRoute");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("game it  is running");
});

// routes
app.use("/users", UserRoute);
app.use("/games", gameRoute);

// port listening
app.listen(port, () => {
  console.log(`game it app listening on port ${port}`);
});
