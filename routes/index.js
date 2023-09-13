const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Ashlee Sattler");
});

module.exports = routes;
