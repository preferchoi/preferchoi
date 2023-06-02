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

## 발급받은 토큰으로 뭘 할까
- 토큰을 통해서, 받은 요청이 정당한 요청인지 확인할 수 있다.
- 각 api 엔드포인트에서 토큰을 확인하는 미들웨어를 설정하기만 하면 됨.
```
// jwt.verify 함수를 사용

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.user = user;
    next();
  });
```
- hwt.sign 함수에서 사용한 암호화 키를 통해 복호화 한 후 해당 정보를 req에 담아서 다음 미들웨어로 전송하는 것
