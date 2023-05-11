const FrontendController = {
  home: (req, resp, next) => resp.render("home"),
  newNote: (req, resp, next) => resp.render("newnote"),
  myNotes: (req, resp, next) => resp.render("mynotes"),
};

export default FrontendController;
