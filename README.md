# TODO LIST

**할 일을 적고 체크, 수정, 삭제할 수 있는 웹앱**

<h2 align="center"><b> Tech Stack </b></h2>
</br>
<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/></a> &nbsp
<hr>

### HTML5

- favicon과 title을 지정하여 문서의 주제를 명확히 함.
- header, main, h1 태그를 통해 시멘틱한 구조(의미있는 내용을 의미있는 태그로)를 나타냄.

### SCSS

- SCSS의 장점인 변수와 함수를 통해 정해진 색상, px은 변수로 만들어서 사용.
- 또한 자주 설정하는 flex or position같은 경우에도 mixin을 이용하여 사용하기 편하게 구성.

### TypeScript

- TS를 통해 변수와 함수에 타입을 지정하여 개발자의 개발의도에 유도할 수 있게 개발

### Node.js

- node환경에서 개발.
- npm을 통해 webpack에 필요한 모든 것(webpack, typescript, babel, loader, plugin...), sweetalert, reset-css를 다운받아 개발.

### Webpack

- Webpack을 이용하여 번들 사용.
- 'HtmlWebpackPlugin'을 통해 기존 HTML 사용.
- 'MiniCssExtractPlugin'로 css파일을 생성하여 HTML에 연결.
- 'CleanWebpackPlugin'로 필요없는 파일 삭제.
- 'CopyPlugin'로 static폴더를 지정하여 이미지나 폰트 파일을 저장.
- ts, babel, sass, css loader로 파일 읽기

### Babel

- babel을 통해 ES6^의 문법을 ES5이하의 문법으로 변환하여 모든 브라우저에서 동작할 수 있게 함.

### Netlify

- 배포를 도와주는 사이트.

<br>
<hr>

##

## Product

> 이미지 클릭 시 페이지 이동

[<img src="https://images.velog.io/images/ahngh/post/a72e1ec3-6272-43e8-8ff1-43080e67ce2b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-26%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.05.37.png" width="250">](https://skytodo-ts.netlify.app/)

<br>
<hr>

## VanillaJS Version

> https://github.com/Ahn-GiHwan/todolist_vanillaJS

<br>

## React Version

> https://github.com/Ahn-GiHwan/todolist_react

<br>
<hr>

## v2.1.0

- input에 focus가 false일 때 enter 클릭 시 keypress 이벤트 실행 됨 <br>-> input에 focus가 true여야만 keypress 이벤트 적용
- list에 아무것도 없을 경우 '할 일을 적어주세요' 문구 출력

## v2.1.1

- 수정 시 호출되는 모달창의 input placeholder값을 수정 할 todo값이 나오도록 수정
