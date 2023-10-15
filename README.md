# 안녕하세요. 웃음이 넘치는 개발자 최선호입니다.

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
    - [백준](https://www.acmicpc.net/user/cba1541) 골드 수준의 알고리즘 문제 해결 가능.
    - Python을 이용해 객체 지향 개념을 적용한 개발 가능.
    - fastAPI를 활용하여 중소규모 서버 제작 가능.

- javascript(중)
    - 기본적인 문법들을 이해하고 사용할 수 있음.
    - 비동기식 페이지를 작성할 수 있음

- typescript(중)
    - 타입스크립트를 왜 사용하는 지에 대해 알고 있음.
    - 각 변수의 타입을 설정하여 타입 안정성을 강화하고 오류 처리 및 유지보수를 용히하게 할 수 있다.

- vuejs(중)
    - vuex, vue-router를 이용한 클라이언트 서버 제작 가능.
    - vue 디렉티브를 이해하고 사용할 수 있음.

- expressjs(중)
    - 간단한 서버 제작 가능
    - DB연동하여 간단한 CRUD 작성 가능
    - websocket 통신 사용 가능

- openCV(하)
    - 기본적인 카메라 모듈을 만들고 사용할 수 있음.
    - mediapipe나 yolo를 이용해 물체를 검출하고 간단한 함수를 작성할 수 있음.

- reactjs(하)
    - react의 문법을 이해하고 사용할 수 있음.



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


## [Vuepygo](https://github.com/preferchoi/Vuepygo)

### 1. 요약
Vue, Python, Django를 이용한 영화 주제 웹 프로젝트

### 2. 기간
2022.11. ~ 2022.11.

### 3. 역할
- Django를 이용한 백엔드 제작
- KNN 모델을 이용한 영화 추천 알고리즘 작성

### 4. 기술 스택
Python, Django, ML

### 5. 활동
- Django를 활용하여 기본 CRUD를 작성하였음.
- pandas를 활용하여 데이터 정제 및 KNN 알고리즘을 활용한 추천 기능을 제작하였다.



## [SaveUs](https://github.com/preferchoi/saveus.git)

### 1. 요약
물체 판별을 통한 분리수거 처리기 프로젝트

### 2. 기간
2020.10. ~ 2020.11.

### 3. 역할
- CNN 모델을 이용한 쓰레기 판별 모델 제작
- flask를 이용한 쓰레기 분류 모델 연동
- 모델 교육을 위한 이미지 데이터 크롤링

### 4. 기술 스택
python, flask, AI


# 개인 프로젝트 및 학습
## [memoirs_AI](https://github.com/preferchoi/memoirs_AI)

### 1. 요약
chatGPT API를 활용한 AI 회고록 서비스

### 2. 기술 스택
react.js

### 3. 학습 내용
vite를 이용한 프로젝트 생성과 create react app으로 생성한 프로젝트와의 차이에 대해 학습했다.
chatGPT API 사용법에 대해 학습했다.

<br>

# 감사합니다!
