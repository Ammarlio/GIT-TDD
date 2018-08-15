const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
  // TODO - your code here!
  
  db.Cat.find({},function(err,data){
  	if(err) {
  		res.send(err)
  	} else {
  		res.send(data)
  	}
  })
});

app.post('/cats', function (req, res) {
  // TODO - your code here!
  	var obj = {
  		catName : req.body.catName,
  		ownerEmail : req.body.ownerEmail,
  		imageUrl : req.body.imageUrl,
  		adoptionMessage : req.body.adoptionMessage

  	}
    db.save(obj,function(err,data){
    	if(err) throw err
    		else{
    			res.send(data)
    		}
    })
 
})



if(!module.parent) {

  var port = 1128;
  app.listen(port, () => {
  console.log("Listening at http:/localhost:" + port );
  });
}
module.exports = app


