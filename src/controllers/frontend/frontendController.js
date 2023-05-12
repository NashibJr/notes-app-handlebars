import client from "../../app/app.js";

const FrontendController = {
  home: (req, resp, next) => resp.render("home"),
  newNote: async (req, resp, next) => {
    let error, message;
    try {
      const { title, content } = req.query;
      const data = await client.post("/create", {
        title: title,
        content: content,
      });
      if (data.data.note.message) {
        message = data.data.note.message;
      } else {
        message = `Note with <strong>${data.data.note.title}</strong> title is successfully created`;
      }
    } catch (error) {
      console.log(error);
    }
    resp.render("newnote", { error: error, message: message });
  },
  myNotes: (req, resp, next) => resp.render("mynotes"),
};

export default FrontendController;
