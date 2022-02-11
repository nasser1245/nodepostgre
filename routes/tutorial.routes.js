module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const comments = require("../controllers/comment.controller.js");
  let tutRoutes = require("express").Router();
  let commRoutes = require("express").Router();
  // Create a new Tutorial
  tutRoutes.post("/", tutorials.create);
  // Retrieve all Tutorials
  tutRoutes.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  tutRoutes.get("/published", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  tutRoutes.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  tutRoutes.put("/:id", tutorials.update);
  // Delete a Tutorial with id
  tutRoutes.delete("/:id", tutorials.delete);
  // Delete all Tutorials
  tutRoutes.delete("/", tutorials.deleteAll);
  // Add tutorial route to main app 

  // Find all comments by tutorialID
  tutRoutes.get("/comments/:id", comments.findAll)

  app.use('/api/tutorials', tutRoutes);


  // Create a new comment
  commRoutes.post("/:tutorialID", comments.addComment);
  // Delete a comment with Id
  commRoutes.delete("/:id", comments.delete)
  // Find one comment by commentID
  commRoutes.get("/:id", comments.findOne)
    // Find one comment by commentID
    commRoutes.put("/:id", comments.update)

  app.use('/api/comments', commRoutes);

};