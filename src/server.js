const { application } = require('express');
const express = require('express');
const app = express();
const mysql = require('mysql');
const bp = require('body-parser');

const port = 1234;
process.env.port = port;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

const connection = mysql.createConnection({
    host: 'gz-cynosdbmysql-grp-gwajki6v.sql.tencentcdb.com',
    user:'root',
    port:'23302',
    password:'Aa1756127061',
    database:'blog'
});

connection.connect(function(err) {
    if(err){
        setTimeout(()=>{
            connection.connect();
        },2000);
    }
});

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

 app.get('/api/test',function(err,res) {
    const sql = 'select * from comment';
    const addSqlParams = ['1'];
    const addSql = 'insert into comment(name) values(?)';
    connection.query(sql,function(err,result) {
        if(err) {
            console.log(err);
            return;
        }
        const result1 = JSON.stringify({
            code: 200,
            data:result
        });
        console.log(result1);
        res.end(result1);
    });
    connection.query(addSql,addSqlParams,function(err,result) {
        if(err) {
            console.log(err);
            return;
        }
        //console.log(result);
    });
 })

 app.post('/api/post',function(req,res){
     //console.log(req.body);
     console.log("收到请求...");
     if(!req.body.userName || !req.body.content){
        res.end(JSON.stringify({
            code:400,
            msg:'参数错误'
        }));
        return;
     }
     const addSqlParams = [];
     const addSql = 'insert into comment(id,name,content) values(?,?,?)';
     var id = Date.now();
     addSqlParams.push(id.toString());
     addSqlParams.push(req.body.userName);
     addSqlParams.push(req.body.content);
     console.log(addSqlParams);
     connection.query(addSql,addSqlParams,function(err) {
        if(err) {
            console.log(err);
            return;
        }
    });
 });

 app.get('/api/getComments',function(req,res){
    console.log("收到请求,拉取数据...");
    const sql = 'select * from comment';
    connection.query(sql,function(err,result) {
        if(err) {
            console.log(err);
            return;
        }
        const result1 = JSON.stringify({
            code: 200,
            data:result
        });
        console.log(result1);
        res.end(result1);
    });
 });

 app.get('/api/getPosts',function(req,res){
    console.log("收到请求,拉取数据...");
    const sql = 'select * from blog_content';
    connection.query(sql,function(err,result) {
        if(err) {
            console.log(err);
            return;
        }
        const result1 = JSON.stringify({
            code: 200,
            data:result
        });
        console.log(result1);
        res.end(result1);
    });
 });


app.listen(port, () => {
    console.log(`[Test Server] Server running at http://127.0.0.1:${port}`);
});