const db = require("../models");
const Comment = db.comments;

// Add comment to specific tutorial
exports.addComment = (req, res) => {
  if (req.body === undefined || req.body === {}) {
    res.status(400).send({
      message: "Comment can not be empty!"
    });
    return;
  }

  const comment = {
    name: req.body.name,
    text: req.body.text,
    tutorialID: req.params.tutorialID
  };
  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error while creating the tutorial."
      });
    });

};

// Delete a comment
exports.delete = (req, res) => {
  const id = req.params.id
  if (id == undefined) {
    res.status(400).send({
      message: "Please send a comment Id to delete"
    });
    return;
  }
  Comment.destroy({ where: { id: id } })
    .then(num => {
      num == 1 ? res.status(200).send({ message: "Comment deleted successfully" }) : res.status(404).send({ message: "Comment Id not found for delete!" });
    })
    .catch(() =>
      res.status(500).send({ message: "Comment doesn't removed! maybe wrong Id." })
    )
};

exports.findAll = (req, res) => {
  let tutorialID = req.params.tutorialID;
  if (tutorialID == undefined) {
    res.status(400).send({
      message: "Please send a tutorial Id to fetch all comments of it."
    });
    return;
  }
  Comment.findAll({ where: { tutorialID: parseInt(tutorialID) } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(
        {
          message:
            err || "Canot retrieve comments"
        });
    });
}

exports.findOne = (req, res) => {
  let id = req.params.id;
  if (id == undefined) {
    res.status(400).send({
      message: "Please give a comment Id to fetch comment."
    });
    return;
  }
  Comment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comment with id=" + commentID
      });
    });
}

exports.update = (req,res)=>{
  id = req.params.id;
  if (id == undefined) {
    res.status(400).send({
      message: "Provide a comment ID to update."
    });
    return;
  }
Comment.update(req.body, {where:{id:id}})
.then(num => {
  if (num == 1) {
    res.send({
      message: "Comment was updated successfully."
    });
  } else {
    res.send({
      message: `Cannot update Comment with id=${id}. Maybe Comment was not found or request body is empty!`
    });
  }
})
.catch(err => {
  res.status(500).send({
    message: "Error updating Comment with id=" + id
  });
});
}