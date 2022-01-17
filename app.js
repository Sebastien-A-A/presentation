const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

////////////////////////////////////////////////////////////////////////////////


app.get("/", function(req , res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/math", function(req,res) {
  res.sendFile(__dirname + "/math.html");
});

app.post("/programming", function(req , res){
  res.sendFile(__dirname + "/programming.html");
});


////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
