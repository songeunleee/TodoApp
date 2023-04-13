const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/pet", (req, res) => {
  res.send("펫쇼핑 가능");
});
app.get("/beauty", (req, res) => {
  res.send("뷰티용품 쇼핑페이지입니다");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", (req, res) => {});
