const notesCtrl = {};

const Note = require("../models/note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author
  });
  //   console.log(newNote);
  await newNote.save();
  res.json({ message: "Note Saved" });
};

notesCtrl.getNote = async (req, res) => {
  //   console.log(req.params.id);
  const note = await Note.findById(req.params.id);
  //   console.log(note);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    date,
    author
  });
  res.json({ message: "Note Updated" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};

module.exports = notesCtrl;
