const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'test', password: 'test' },
  // You can add more users here
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user == null) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ id: user.id, username: user.username }, 'secret-key', { expiresIn: '1h' });
  // 인증 토큰 전송
  res.send({ token });
});


app.get('/login_check', verifyToken, (req, res) => {
  res.send(req.user);
});

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token == null) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }

    req.user = user;
    next();
  });
}




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});