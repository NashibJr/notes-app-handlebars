import NotesService from "../../services/backendServices.js";

const backendController = {
  create: async (req, resp, next) => {
    try {
      const data = await NotesService.createNote(req.body);
      return resp.status(200).json({
        note: data,
      });
    } catch (error) {
      return resp.status(200).json({
        error: error._message,
      });
    }
  },

  get: async (req, resp, next) => {
    try {
      const data = await NotesService.getNotes();
      return resp.status(200).json({
        notes: data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, resp, next) => {
    try {
      const data = await NotesService.getAllNotes();
      return resp.status(200).json({
        notes: data,
      });
    } catch (error) {
      console.log(error);
      return resp.status(500).json({
        message: "internal server error",
      });
    }
  },

  singleNotePage: async (req, resp, next) => {
    try {
      const { id } = req.params;
      const data = await NotesService.singleNote(id);
      return resp.status(200).json({
        note: data,
      });
    } catch (error) {
      return resp.status(500).json({
        message: error,
      });
    }
  },

  deleteNote: async (req, resp, next) => {
    try {
      const { id } = req.params;
      const data = await NotesService.deleteNote(id);
      if (data) {
        return resp.status(201).json({
          message: "successfully deleted",
        });
      } else {
        return resp.status(500).json({
          message: "Internal server error",
        });
      }
    } catch (error) {
      return resp.status(404).json({
        message: "An error has occured!!!",
      });
    }
  },
};

export default backendController;
