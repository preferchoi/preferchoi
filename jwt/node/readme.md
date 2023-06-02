## jsonwebtoken 시작하기
```
// jwt install
npm install jsonwebtoken

// body-parser install
// form date 읽기용
npm install body-parser
```

```javascript
// jwt import
const jwt = require('jsonwebtoken');

// api endpoint에서 진행
// DB check 후 jwt api 사용
const token = jwt.sign();
```
이번에는 이 함수를 사용했는데, 
```
jwt.sign(payload, secretOrPrivateKey, [options, callback])
```
페이로드에 유저 이름과 비밀번호를, 암호화 키를 secret-key라는 이름으로, expiresIn 옵션을 1시간으로 설정해 1시간 후 만료되게 했다.


