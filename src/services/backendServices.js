import Note from "../databases/models/notes.js";

const NotesService = {
  createNote: async (note) => {
    //check if the title of the note exists on the database already.
    const exists = await Note.findOne({ title: note.title });
    if (exists) {
      return {
        message: "Note title exists, choose another title",
      };
    }
    return await Note.create(note);
  },
};

export default NotesService;
