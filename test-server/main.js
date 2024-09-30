const express = require('express'); // Express 모듈 로드
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express(); // Express 앱 생성
const port = 4000; // 서버가 동작할 포트 설정

const student = require('./routes/student');

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send({status: 'success', msg: '안녕하세요. 테스트 서버입니다.'});
});

app.post('/list',(req, res)=>{
  const data = [];
  data.push({name: '아이유', age: 31, job: '가수'});
  data.push({name: '공유', age: 45, job: '배우'});
  data.push({name: '손흥민', age: 32, job: '축구선수'});
  data.push({name: '양준혁', age: 25, job: '개발자'});
  data.push({name: '김인창', age: 30, job: '게임개발자'});
  data.push({name: '최서은', age: 23, job: '개발자'});
  data.push({name: '이요셉', age: 27, job: '개발자'});
  data.push({name: '최종군', age: 31, job: '차은우'});
  data.push({name: '기다운', age: 30, job: '연예인'});
  data.push({name: '이혜인', age: 26, job: '카리나'});
  

  res.send({status: 'success', msg: data});
})


app.post('/student/add', student.add);
app.get('/student/get', student.get);

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});