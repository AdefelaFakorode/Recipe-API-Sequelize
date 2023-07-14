const express = require("express");
const app = express();
const port = 4000;
const { Recipe } = require("./models");
require("dotenv").config();

// middleware
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Recipe-API...");
});

//getting all recipes
app.get("/recipes", async (req, res) => {
    try {
      const allJobs = await Recipe.findAll();
  
      res.status(200).json(allJobs);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server Error' });
    }
  });

//getting a specific recipe
app.get("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const recipe = await Recipe.findOne({ where: { id: recipeId } });
  
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).send({ message: "Recipe not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server Error' });
    }
  });

 //updating a specific recipe
 
 app.patch("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const [numberOfAffectedRows, affectedRows] = await Recipe.update(req.body, { where: { id: recipeId }, returning: true });
  
      if (numberOfAffectedRows > 0) {
        res.status(200).json(affectedRows[0]);
      } else {
        res.status(404).send({ message: "Recipe not found" });
      }
    } catch (error) {
      res.status(500).send({ message: 'Server not found'});
      console.error(error);
    }
  });

//delete a specific recipe
app.delete("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const deleteOp = await Recipe.destroy({ where: { id: recipeId } });
  
      if (deleteOp > 0) {
        res.status(200).send({ message: "Recipe successfully deleted" });
      } else {
        res.status(404).send({ message: "Recipe not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Server error" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});