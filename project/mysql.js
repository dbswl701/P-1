const { response } = require('express');
var mysql = require('mysql2');

var db = mysql.createConnection({  // 접속 하는데 필요한 명령. mysql 모듈에게 ~~ 라는 매소드 호출
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'proj'
}); 
//db.connect();


db.connect(function(err){
  if(err) throw err;
  db.query(`SELECT * FROM topic`, function(error, topics){
    if(error){
      console.log(error);
    }
    console.log(topics);
  });
});


module.exports = db;