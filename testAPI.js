var express = require("express");
var router = express.Router();
const axios = require('axios');

/*router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;*/

router.get("/", async (req, res, next) => {
  console.log("'/test' call");
  try {
    const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=a9a8d3c7-b46e-42e7-9cd0-e46c03b0bef5");
    console.log(res);
    res.json(data);
  }
  catch (err) {
  	console.log(err);
    next(err)
  }
})

module.exports = router;