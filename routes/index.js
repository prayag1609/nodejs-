var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var adminController = require("../controller/admincontroller")

app.get("/admin",adminController.adminHome)
app.post("/admin/regi",adminController.adminRegi)
app.post("/admin/login",adminController.adminLogin)
app.get("/admin/out",adminController.adminOut)
// ================
app.post("/admin/addresult",adminController.addResult)





var userController = require("../controller/usercontroller")

app.get("/user",userController.userHome)
app.post("/user/regi",userController.userRegi)
app.post("/user/login",userController.userLogin)
app.get("/user/out",userController.userOut)
app.post("/user/viewresult",userController.viewResult)

module.exports = app;
