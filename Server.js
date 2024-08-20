
const express =require ("express");
const cors = require('cors');
const app =express();
const port ="4000";
const path = require("path")

const api_=require(path.join(__dirname, "/API"))
app.use("/api", api_ );

app.use(express.json())
app.use(express.urlencoded({extended:true}))





app.use("/", express.static(path.join(__dirname, "/Client")));
app.use("/home", express.static(path.join(__dirname, "/Client")));
app.use("/contact",express.static(path.join(__dirname, "/Client/contact.html")));
app.use("*", express.static(path.join(__dirname, "/Client/404.html")));


app.get("/", (req, res) => {
    res.send("hello  world");
  });
  

app.listen(port, (error) => {
    if (error) {
      console.log("the server did not start:", error);
      return
    }
    console.log("the server is running on http://127.0.0.1:" + port);
  });

