//Purav Nisar
/*const express = require('express');
const app = express();

app.use((req,res, next)=>{
	res.status(200).json({
	message: 'It works!'
	});
});

const axios = require('axios');

axios.get('https://content.guardianapis.com/search?api-key=[aab9f2db-50ea-4203-96e2-9f131e5b5d21]&section=(sport|business|technology|politics)&show-blocks=all')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

module.exports=app;*/

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;