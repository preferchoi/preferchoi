# 안녕하세요. 개발자 최선호입니다.

## 개인 이력

- 2023.04. [삼성] 청년 SW 아카데미 특화 프로젝트 우수상 수상
- 2021.02. 조선대학교 졸업
- 2020.11. 빅데이터기반 융합SW개발자과정2 최종 프로젝트 최우수상 수상

## 학습 이력

- 2023.08. ~ 2023.10. wanted-pre-onboarding-internship 참여
- 2022.07. ~ 2023.06. [삼성] 청년 SW 아카데미 수료
- 2020.07. ~ 2020.11. 빅데이터기반 융합SW개발자과정2 수료

## 자격증

- 2022.12 SQLD(SQL 개발자) 주관: 한국데이터산업진흥원

## 기술 스택

- Python(중상)

  - 알고리즘 문제 해결 가능.([백준](https://www.acmicpc.net/user/cba1541), [SWEA](), [programers]())
  - Python을 이용해 객체 지향 개념을 적용한 개발 가능.
  - fastAPI를 활용하여 중소규모 서버 제작 가능.

- javascript(중)

  - 기본적인 문법들을 이해하고 사용할 수 있음.
  - 비동기식 페이지를 작성할 수 있음

- react.js(중)

  - react의 문법을 이해하고 사용할 수 있음.
  - react hook을 이해하고 사용 및 커스텀 할 수 있음.
  - 가상 DOM의 사용 이유와

- vue.js(중)

  - vuex, vue-router를 이용한 클라이언트 서버 제작 가능.
  - vue 디렉티브를 이해하고 사용할 수 있음.

- typescript(중)

  - 타입스크립트를 사용하는 이유에 대해 알고 있음.
  - 각 변수의 타입을 설정하여 타입 안정성을 강화하고 오류 처리 및 유지보수를 용히하게 할 수 있다.

- expressjs(중)

  - 서버 제작 가능
  - DB연동하여 간단한 CRUD 작성 가능
  - socket.io를 이용한 websocket 통신 서버 제작 가능

- graphQL(중하)
  - 데이터 쿼리, 뮤테이션 작성 가능

<br>

# 프로젝트 내역

## [Don Keeper](https://github.com/preferchoi/Donkeeper)

### 1. 요약

Vue.js(FrontEnd), Spring Boot(BackEnd)를 이용한 가계부 웹 앱 프로젝트

### 2. 기간

2023.04. ~ 2023.05.

### 3. 역할

- 프로젝트 일정 관리 및 진도 체크
- Vue.js를 이용한 Client Web 제작

### 4. 기술 스택

Vue.js, chart.js

### 5. 활동

- vue-router를 활용하여 소비 내역과 같은 경우, 동적 라우팅을 적용하였음.
  - 소비, 지출 내역의 경우, 데이터의 형태가 고정되어 있었다. PK로 잡혀 있는 ID값을 이용하여 동일 페이지에서 동적 라우팅을 통해 데이터만 다르게 보일 수 있게 하였다.
- 각 기능마다 라우트를 만들어, 중첩 라우팅을 적용하였음.
  - 한 기능에 여러 페이지를 활용해야 했다. 기능 단위로 페이지를 정리하고 이를 구분하여 라우트 경로를 지정하였다.
- [chart.js](https://www.chartjs.org)를 활용하여 지출 내역과 같은 데이터를 시각화하였음.
- prop, emit를 활용하여 상태 관리를 진행하였음.
  - 중첩 라우팅을 진행하였기 때문에, vuex를 활용해야 할 정도로 데이터 흐름이 넓게 퍼트려져 있지 않았다. 그렇기 때문에 vuex 모듈을 활용하지 않고 prop, emit을 활용하였다.
- Selenium을 활용한 크롤링을 진행하였음.
  - 카드 추천을 위한 데이터 수집을 위해 [카드고릴라](https://www.card-gorilla.com/home) 사이트에서 데이터 크롤링을 진행하고, .csv 파일로 저장하였다.

## [O't MZ](https://github.com/preferchoi/OtMZ)

### 1. 요약

Vue.js(FrontEnd), Spring Boot(BackEnd), fastAPI(AI server)를 이용한 패션 관련 웹 프로젝트

### 2. 기간

2023.02 ~ 2023.03

### 3. 역할

- fastAPI를 이용한 AI 기능 서버 제작 보조
- Vue.js를 이용한 Client Web 제작

### 4. 기술 스택

Vue.js, fastAPI, chart.js

### 5. 활동

- vuex를 활용한 상태 관리를 진행하였음.
  - 이미지 데이터를 처리해야 했기 때문에 prop, emit을 활용하기엔 컴포넌트 간의 데이터 이동이 잦고, 이동하는 데이터의 크기가 컸다. 성능 향상을 위해 상태를 중앙 관리할 필요성이 있다 판단하여 vuex를 활용하여 상태관리를 진행하였다.
- fastAPI를 활용한 AI 서버 프로토타입 제작.
  - flask를 활용하여 만들던 기존 팀원의 코드를 변경하여 fastAPI로 이식하였고, 환경 설정을 진행하였다.

## [Toriend](https://github.com/preferchoi/Toriends)

### 1. 요약

arduino와 jetson nano로 만든 스마트 미러, react, expressjs를 이용한 유,아동 양치질 교육 플랫폼

### 2. 기간

2023.01. ~ 2023.02

### 3. 역할

- expressjs를 이용한 백엔드 제작
- openCV, mediapipe lib을 이용한 실시간 얼굴 좌표 검출과 websocket 기술을 통한 검출 좌표 송수신, javascript를 이용한 이미지 좌표 수정을 이용한 AR 기능 제작

### 4. 기술 스택

Python, openCV, express.js, javascripts, mediapipe, Docker

### 5. 활동

- WebSocket 관련 모듈 중 [ws](https://www.npmjs.com/package/ws)를 사용하였음.
  - 클라이언트 - 서버 간 데이터 전송 방식에는 SSE와 WebSocket 방식이 존재하는데, 양방향 통신을 위해 WebSocket 방식을 적용하였다.
- python의 MediaPipe 라이브러리를 활용하여 얼굴 인식을 진행했고, 얼굴의 10개 좌표를 추출하여 ws를 통해 데이터를 전송하였다.
- 전송받은 데이터를 통해 이미지의 위치를 조정하는 js 코드를 작성하였다.
- docker를 활용하여 배포를 진행하였음.
  - dockerfile을 작성하고, docker hub를 활용하여 수동으로 배포하였다.

# 개인 프로젝트 및 학습

## [FACTORY](https://github.com/preferchoi/FACTORY) (2024.01.20. ~ 2024.02.20.)

### 1. 요약

fastAPI와 vue.js를 활용한 공장 시뮬레이터 프로젝트

### 2. 기술 스택

fastAPI, vue.js, axios, vuetify(디자인)

### 3. 학습 내용

- fastAPI를 활용해 서버를 제작했다.
- asyncio를 활용해 api가 비동기로 운용되도록 제작하였다.
- vuex를 활용해 특정 status를 중앙 제어하여 컴포넌트 간 연동을 진행하였다.
- vuetify를 활용해 디자인을 진행하였다.

## [cocktails](https://github.com/preferchoi/cocktails) (2023.11.30. ~ 2023.12.20.)

### 1. 요약

graphQL과 apollo server, react.js를 활용한 칵테일 정보 게시판 프로젝트

### 2. 기술 스택

graphQL, react.js, express.js, apollo, react-waypoint, chakra-ui(디자인)

### 3. 학습 내용

- graphQL 기술과 apollo server, express.js를 활용해 서버를 제작하였다.
- react-waypoint를 활용해 무한 스크롤 기능을 제작하였다.
- refreshToken과 accessToken을 활용해 로그인 상태를 관리하였다.
- redis를 활용해 refreshToken을 관리하였다.
- apollo cache를 활용해 특정 쿼리를 추가 파라미터를 이용해 구분하여 캐싱을 진행하였다.
- chakra-ui를 활용해 디자인을 진행하였다.

## [memoirs_AI](https://github.com/preferchoi/memoirs_AI)

### 1. 요약

chatGPT API를 활용한 AI 회고록 서비스

### 2. 기술 스택

react.js

### 3. 학습 내용

- vite를 이용한 프로젝트 생성과 create react app으로 생성한 프로젝트와의 차이에 대해 학습했다.
- chatGPT API 사용법에 대해 학습했다.

## [websocketPJT](https://github.com/preferchoi/websocketPJT) (2023.10.20. ~ 2023.11.06.)

### 1. 요약

socket.io를 이용한 채팅 서비스 웹

### 2. 기술 스택

express.js, react.js, socket.io, socket.io-client, sharp.js

### 3. 학습 내용

- 풀스택 개발 과정의 장점과 그 책임에 대해 이해할 수 있었다.
- socket.io를 활용한 웹 소켓 작동에 대해 이해할 수 있었다.
- socket.io의 room 기능과 동적 라우팅을 사용한 namespace 배정의 차이와 장단점에 대해 이해했다.
- 디바운싱과 쓰로틀링의 차이를 알고, 해당 기능을 작성할 수 있게 되었다.
- sharp.js를 사용한 이미지 조작을 경험했다.

<br>

# 감사합니다.
