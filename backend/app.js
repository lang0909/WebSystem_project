var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var axios = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiODIyMjE4NjgzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTY3MDkxNjMzLCJleHAiOjE2MzAxNjM2MzMsImlhdCI6MTU2NzA5MTYzM30.rcv7fksQgEq-DElMRcUJAYEndUMjmLQU7OKjGpH5gVE';
var mongoose = require('mongoose')

var spidSchema = mongoose.Schema({
    id: String,
    name: String
})

var spSchema = mongoose.Schema({
    id: Number,
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

var commentSchema = mongoose.Schema({
    spId: String,
    spPosition: String,
    content: String
})

var formationSchema = mongoose.Schema({
    formation: Number,
    position: [Number]
})

var conn = mongoose.createConnection('mongodb://localhost/fifaonline-spid', { useUnifiedTopology: true, useNewUrlParser: true });
var conn2 = mongoose.createConnection('mongodb://localhost/fifaonline-top10000', { useUnifiedTopology: true, useNewUrlParser: true });
var conn1 = mongoose.createConnection('mongodb://localhost/test', { useUnifiedTopology: true, useNewUrlParser: true });
var conn3 = mongoose.createConnection('mongodb://localhost/Formation', { useUnifiedTopology: true, useNewUrlParser: true });
var conn4 = mongoose.createConnection('mongodb://localhost/Name',{ useUnifiedTopology: true, useNewUrlParser: true })
var spidModel = conn.model('spid', spidSchema, 'spid');
var top10000Model = conn2.model('topRankerUsingAverage', top10000Schema, 'topRankerUsingAverage');
var commentModel = conn1.model('comm', commentSchema, 'comment');
var formationModel = conn3.model('formation', formationSchema, 'formation');
var spModel = conn4.model('spid', spSchema, 'spid');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api/:playerName', function(req, res, next) {
    const query = new RegExp(req.params.playerName);
    spidModel.find({ name: query }, (err, result_value) => {
        res.send(result_value);
    });
});

app.get('/season/:num', function(req, res, next) {
    const temp = req.params.num;
    res.sendFile(path.join(__dirname + '/season/' + temp));
})

app.get('/season_background/:num', function(req, res, next) {
    const temp = req.params.num;
    res.sendFile(path.join(__dirname + '/season_background/' + temp));
})

app.get('/players/:id', function(req, res, next) {
    const temp1 = path.join(__dirname + '/players/p' + req.params.id + '.png');
    const temp2 = path.join(__dirname + '/playersAction/p' + req.params.id + '.png');
    const temp3 = path.join(__dirname + '/playersAction/p' + parseInt(req.params.id.substring(3, req.params.id.length), 0) + '.png');
    const temp4 = path.join(__dirname + '/players/p' + parseInt(req.params.id.substring(3, req.params.id.length), 0) + '.png');
    if (fs.existsSync(temp1) === true) {
        res.sendFile(temp1);
    } else if (fs.existsSync(temp2) === true) {
        res.sendFile(temp2);
    } else if (fs.existsSync(temp3) === true && parseInt(req.params.id.substring(0,3),0)>=300) {
        res.sendFile(temp3);
    } else if (fs.existsSync(temp4) === true){
        res.sendFile(temp4);
    } else{
        res.sendFile(path.join(__dirname + '/players/not_found.png'));
    }
})

app.get('/top_record/:id', function(req, res, next) {
    top10000Model.find({ spId: req.params.id }).find({ "status.matchCount": { $gt: 300 } }, (err, result) => {
        res.send(result);
    })
})

app.get('/top_record/:id/comment', function(req, res, next) {
    commentModel.find({ spId: req.params.id.substring(0, 9) }).find({ spPosition: req.params.id.substring(9, req.params.id.length) }, (err, result) => {
        res.send(result);
    })
})

app.post('/top_record/:id/comment', function(req, res, next) {
    const temp1 = req.params.id.substring(0, 9);
    const temp2 = req.params.id.substring(9, req.params.id.length);
    var obj = {
        spId: temp1,
        spPosition: temp2,
        content: req.body.content
    }
    commentModel.insertMany(obj, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.send(docs);
        }
    })
})

app.get('/compare/:poandst', function(req, res, next) {
    const temp = req.params.poandst.split(',');
    const temp1 = 'status.' + temp[1];
    const option = { sort: {
            [temp1]: -1 }, limit: 3 };
    top10000Model.find({ spPosition: temp[0], "status.matchCount": { $gt: 300 } }, null, option, (err, result) => {
        res.send(result);
    })
})

app.get('/formation/:fmt', function(req, res, next) {
    formationModel.find({ formation: req.params.fmt }, (err, result) => {
        res.send(result);
    })
})

app.get('/find/:spid', function(req, res, next) {
    spModel.find({ id: req.params.spid }, (err, result) => {
        res.send(result);
    })
})

app.get('/record/:userName', function(req, res, next) {
    let accessId = '';
    let accessId_url = `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${encodeURI(req.params.userName)}`;
    let temp = [];
    let arr = [];
    let test = [];
    let test_temp = [];
    let res_temp = [];
    let formation = [0,0,0,0,0];
    axios.get(accessId_url,{
        headers: {
            Authorization: api_key,
        }
    }).then(res => {
        accessId = res.data.accessId;
    }).then( () =>{
        let matchId_url = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessId}/matches?matchtype=50&offset=0&limit=100`;
        axios.get(matchId_url,{
            headers: {
                Authorization: api_key,
            }
        }).then(res => {
            temp = res.data;
        }).then(()=>{
            for(let i=0;i<temp.length;i++){
                arr.push(axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${temp[i]}`,{
                    headers: {
                        Authorization: api_key,
                    }
                }))
            }
        }).then(() => {
            axios.all(arr).then(response => {
                res_temp = response;
            }).then(() => {
                for(let j=0;j<res_temp.length;j++){
                    formation = [0,0,0,0,0];
                    let str = '';
                    if(res_temp[j].data.matchInfo.length!=2){
                        continue;
                    }
                    if(res_temp[j].data.matchInfo[0].nickname == req.params.userName){
                        for(let k=0;k<res_temp[j].data.matchInfo[1].player.length;k++){
                            let a = res_temp[j].data.matchInfo[1].player[k].spPosition;
                            switch(true){
                                case (a >= 1 && a <= 8):
                                    formation[0]++;
                                    break;
                                case (a >= 9 && a <= 11):
                                    formation[1]++;
                                    break;
                                case (a >= 12 && a <= 16):
                                    formation[2]++;
                                    break;
                                case (a >= 17 && a <= 19):
                                    formation[3]++;
                                    break;
                                case (a >= 20 && a <= 27):
                                    formation[4]++;
                                    break;
                            }
                        }
                        for(let l=0;l<5;l++){
                            if(formation[l]!=0){
                                str = str + formation[l];
                            }
                        }
                        if(str!=''){
                            test_temp.push(str);
                            str = str + '__' + res_temp[j].data.matchInfo[0].matchDetail.matchResult;
                            test.push(str);
                        }
                    }else{
                        for(let k=0;k<res_temp[j].data.matchInfo[0].player.length;k++){
                            let a = res_temp[j].data.matchInfo[0].player[k].spPosition;
                            switch(true){
                                case (a >= 1 && a <= 8):
                                    formation[0]++;
                                    break;
                                case (a >= 9 && a <= 11):
                                    formation[1]++;
                                    break;
                                case (a >= 12 && a <= 16):
                                    formation[2]++;
                                    break;
                                case (a >= 17 && a <= 19):
                                    formation[3]++;
                                    break;
                                case (a >= 20 && a <= 27):
                                    formation[4]++;
                                    break;
                            }
                        }
                        for(let l=0;l<5;l++){
                            if(formation[l]!=0){
                                str = str + formation[l];
                            }
                        }
                        if(str!=''){
                            test_temp.push(str);
                            str = str + '__' + res_temp[j].data.matchInfo[1].matchDetail.matchResult;
                            test.push(str);
                        }
                    }
                }
                let unique = [...new Set(test_temp)];
                let answer = [];
                for(let m=0;m<unique.length;m++){
                    let answer_temp = '';
                    // let formation_temp = '';
                    // for(let n=0;n<unique[m].length-1;n++){
                    //     formation_temp = formation_temp + unique[m].substring(n,n+1) + '-';
                    // }
                    // formation_temp = formation_temp + unique[m].substring(unique[m].length-1,unique[m].length);
                    let win = test.filter(test => test == (unique[m]+'__승')).length;
                    let lose = test.filter(test => test == (unique[m]+'__패')).length;
                    let draw = test.filter(test => test == (unique[m]+'__무')).length;
                    answer_temp = 'vs\t' + unique[m]+ '\t\t\t' + win + '승\t' + draw+ '무\t' + lose + '패\t승률 : ' + (win/(win+lose+draw)*100).toFixed(2) +'%';
                    answer.push(answer_temp);
                }
                res.send(answer);
            })
        })
    })
})

module.exports = app;
