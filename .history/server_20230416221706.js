const express = require("express");
const app = express();
const env = require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

app.set("view engine", "ejs");

let db;

MongoClient.connect(
  "mongodb+srv://llssee123:llssee990120@cluster0.jwrfyax.mongodb.net/?retryWrites=true&w=majority",
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db("todoapp");
  }
);

app.listen("8080", function () {
  console.log(env.parsed);
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

app.post("/add", (req, res) => {
  res.send("전송완료");
  console.log(req.body.title);
  console.log(req.body.date);

  db.collection("post").insertOne(
    { 제목: req.body.title, 날짜: req.body.date },
    function (에러, 결과) {
      console.log("전송완료");
    }
  );
});

app.get("/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray(function (에러, 결과) {
      console.log(결과);
      res.render("list.ejs", { posts: 결과 });
    });
});
