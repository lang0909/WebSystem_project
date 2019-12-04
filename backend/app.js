var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/fifaonline-spid",{useUnifiedTopology: true, useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error',function(err){
//     console.log(err);
// });
// db.on('open',function(){
//     console.log('open');
// })
var spidSchema = mongoose.Schema({
    id: String,
    name: String
})

var top10000Schema = mongoose.Schema({
    spId: Number,
    spPosition: Number,
    status: {
        shoot: Number,
        effectiveShoot: Number,
        assist: Number,
        goal: Number,
        dribble: Number,
        passTry: Number,
        passSuccess: Number,
        block: Number,
        tackle: Number,
        matchCount: Number
    },
    createDate: String
})

// var spidModel = mongoose.model('spid',spidSchema,'spid');

var conn = mongoose.createConnection('mongodb://localhost/fifaonline-spid',{useUnifiedTopology: true, useNewUrlParser: true});
var conn2 = mongoose.createConnection('mongodb://localhost/fifaonline-top10000',{useUnifiedTopology: true, useNewUrlParser: true});
var spidModel = conn.model('spid', spidSchema,'spid');
var top10000Model = conn2.model('topRankerUsingAverage', top10000Schema,'topRankerUsingAverage');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/:playerName',function(req,res,next){
    const query = new RegExp(req.params.playerName);
    spidModel.find({name: query},(err,result_value)=>{
        res.send(result_value);
    });
});

app.get('/season/:num',function(req,res,next){
    const temp = req.params.num;
    res.sendFile(path.join(__dirname+'/season/'+temp));
})

app.get('/season_background/:num',function(req,res,next){
    const temp = req.params.num;
    res.sendFile(path.join(__dirname+'/season_background/'+temp));
})

app.get('/players/:id', function(req,res,next){
    const temp1 = path.join(__dirname+'/players/p'+req.params.id+'.png');
    const temp2 = path.join(__dirname+'/playersAction/p'+parseInt(req.params.id.substring(3,req.params.id.length),0)+'.png');
    const temp3 = path.join(__dirname+'/players/p'+parseInt(req.params.id.substring(3,req.params.id.length),0)+'.png');
    if(fs.existsSync(temp1)===true){
        res.sendFile(temp1);
    }else if(fs.existsSync(temp2)===true){
        res.sendFile(temp2);
    }else if(fs.existsSync(temp3)===true){
        res.sendFile(temp3);
    }else{
        res.sendFile(path.join(__dirname+'/players/not_found.png'));
    }
})

app.get('/top_record/:id',function(req,res,next){
    top10000Model.find({spId: req.params.id},(err,result)=>{
        res.send(result);
    })
})

module.exports = app;
