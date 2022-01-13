// express server
// express 모듈 불러오기
const express = require("express");
const { request } = require("http");
const path = require("path");
const db = require(__dirname+ '/mysql');



// express 사용
const app = express();

// express.static 미들웨어 사용
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {

  res.sendFile(path.resolve("frontend", "index.html"));
});


app.get("/", function(req, res){ // 메인페이지(/)에 있을 때 db정보를 얻어오고 싶었는데 몇시간을 다시 해봐도 정보를 얻지 못한다....
  // 분명히 .connect로 확인하면 잘 들어가있고 연결도 잘 된 것 같은데,,,,
  console.log("!!!!!"); // 이것도 안나오는거 보니까 접근방법 자체가 틀렸나보다 post방식으로 처리해봐도 나오지 않는데 일단 맑은 정신으로 내일 다시 봐야할 듯
  db.query(`SELECT * FROM topic`, function(error, topics){
    if(error){
      console.log(error);
    }
    console.log(topics);
  });
// -> 아 다시 생각해보니 다른 코드에서 연습한다고 form 주구장창 했었는데 여기선 아직  아 그건 아니겠구나
// 그냥 자고 조금 더 맑은정신에서 파일 전체로 다 엎어야 할 듯

  // console.log('????');
  // db.query(`SELECT * FROM topic`, function(error, topics){
  //   if(error){
  //     console.log(error);
  //   }
  //   console.log(topics);

  // });
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

