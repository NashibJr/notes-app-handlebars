import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("notes", noteSchema);

export default Note;
