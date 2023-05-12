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
};

export default backendController;
