const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.patch("/score", async (req, res) => {
  try {
    const { score, email } = req.body;
    const query = { email: email };
    const updateScore = {
      $inc: {
        score: score,
      },
    };
    await gameController.updateScore(query, updateScore);
    res.status(200).send({ message: "score  added successfull" });
  } catch (error) {
    res.status(500).send({ error: "score not found" });
  }
});

router.patch("/level", async (req, res) => {
  const { email } = req.query;
  const {difficultyLevel} = req.body
  const query = {
    email: email,
  };

  try {
    const updateLevel = {
      $set: {
        difficultyLevel: difficultyLevel,
      },
    };
    await gameController.updateLevel(updateLevel , query);
    res.status(200).send({ message: `Your Level is ${difficultyLevel} ` });
  } catch (error) {
    res.status(500).send({ error: "Level not found" });
  }
});

module.exports = router;
