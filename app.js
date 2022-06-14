const express = require("express");
const app = express();
const port = 3000;
const ip = require('request-ip')

// articles 라우터 연결

// url과 입력과 출력이 일어난 시간이 찍히는 미들웨어 생성
const requestMiddleware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, "-", new Date())
    next();
};

app.use(requestMiddleware);


app.get('/', (req, res)=> {
    res.send("Hello World@@@")
    console.log(ip.getClientIp(req))
});

app.listen(port, '0.0.0.0', () => {
    console.log(port,"포트로 서버가 켜졌어요!")
});