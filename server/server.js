var express = require("express");
var dbConnection = require("./dbConnection");

var app = express();

const dbUrl = "mongodb://" + "localhost" + ":" + "27017" + "/" + "apps";
app.use(dbConnection(dbUrl));

var server = app.listen(6000, function() {
  var host = server.address()
    .address;
  var port = server.address()
    .port;
  console.log("Server is listening at http://%s:%s", host, port);
});

app.get("/find", function(req, res) {
  var queryText = req.query.q;
  if (!queryText) {
    res.status(400)
      .json({
        message: "Query parameter q is missing."
      });
    return;
  }
  var collection = req.db.collection("listings");
  try{
    var query = JSON.parse(queryText);
  }
  catch(SyntaxError){
    res.status(400)
      .json({
        message: "The value of the query parameter q is not a valid JSON object."
      });
    return;
  }
  collection.find(query)
    .toArray(function(err, docs) {
      if (err) {
        res.type("json")
          .status(404)
          .send({
            message: "Not found."
          });
      }
      res.json(docs);
    });
});
