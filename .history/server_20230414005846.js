const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("경로", function () {});
