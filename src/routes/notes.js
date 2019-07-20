const { Router } = require("express");
const router = Router();

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote
} = require("../controllers/notes.controllers");

router
  .route("/")
  .get(getNotes)
  .post(createNote);

router
  .route("/:id")
  .get(getNote)
  .delete(deleteNote)
  .put(updateNote);

// router.route("/").get((req, res) => res.send("Notes Routes"));
//   .post();

// router
//   .route("/:id")
//   .get((req, res) => res.send("Notes Routes"))
//   .post()
//   .put()
//   .delete();

module.exports = router;
