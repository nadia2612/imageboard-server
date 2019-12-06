const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router