// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

// express.static 미들웨어 사용
// 이미지, css, js 파일과 같은 정적 파일을 제공하기 위해 express의 기본 미들웨어 함수인 express.static 사용
// server.js의 실행경로 + '/static'을 localhost:port/static으로 마운트
// 쨌든 이렇게 해서 /static 경로를 통해 fronted 디렉토리에 포함된 파일을 로드할 수 있게 된다.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  // path.resolve는 인자들을 합해서 하나의 경로로 만들어준다.
  // path.resolve는 /를 절대경로로, path.join은 상대경로로 처리한다.
  res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

