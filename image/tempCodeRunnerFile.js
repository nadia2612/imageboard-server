router.post("/image", (req, res, next) => {
  Image.create(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("got here");

      next(err);
    });