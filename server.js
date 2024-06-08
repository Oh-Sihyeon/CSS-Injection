//1. index.html에 css 취약점 코드 작성 
    //=> 관건: 속성 값으로 플래그를 집어넣어놓을 건데, 어떻게 집어넣는가?
        //=> 
//2. 공격자는 자기 서버 페이지를 만들어서, 자기 페이지로 flag값을 읽어오기

const express = require('express');
const nunjucks = require('nunjucks');

const app = express()

// 뷰 엔진 설정
app.set('view engine', 'html');
nunjucks.configure('./views', {
    express: app,
    watch: true
});

app.use(express.urlencoded({ extended: true }));

// 홈페이지
app.get('/', (req, res) => {
    res.render('index.html');
});

// 서버 리스닝
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
