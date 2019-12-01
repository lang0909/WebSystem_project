var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/fifaonline-spid",{useUnifiedTopology: true, useNewUrlParser: true});
var db = mongoose.connection;
db.on('error',function(err){
    console.log(err);
});
db.on('open',function(){
    console.log('open');
})
var spidSchema = mongoose.Schema({
    id: Number,
    name: String
})

var spidModel = mongoose.model('spid',spidSchema,'spid');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/:playerName',function(req,res,next){
    console.log("start");
    const query = new RegExp(req.params.playerName);
    spidModel.find({name: query},(err,result_value)=>{
        res.send(result_value);
    });
});

module.exports = app;
