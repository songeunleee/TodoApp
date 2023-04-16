const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

let db;
MongoClient.connect(
  "mongodb+srv://tree990120:llssee990120@cluster0.6wugbes.mongodb.net/?retryWrites=true&w=majority",
  (에러, client) => {
    if (에러) return console.log(에러);

    db = client.db("todoapp");

    db.collection("post").insertOne("저장할 데이터", (에러, 결과) => {
      console.log("저장완료");
    });

    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);

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
});
