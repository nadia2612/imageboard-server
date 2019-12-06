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
router.post("/image", (req, res, next) => {
  Image.create(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("got here");

      next(err);
    });
});

module.exports = router