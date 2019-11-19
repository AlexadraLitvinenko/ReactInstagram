const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer  = require("multer");
const app = express();
const cors = require('cors');

const users = [{
    id: '5687fjfd',
    user: {
        fullname: 'Alex',
        name: 'Alex',
        email: 'alex@mail.ru',
        password: '123'
    }
}];

const likecomment = [{likes: [0, 0, 0, 0, 0, 0, 0]}, {comments: [[['user1', 'So nice!'] , ['user2', 'Yeah']], [], [], [], [], [], []]} ];

app.use(cors());
app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})
app.use(multer({storage: storage}).single("file"));


app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.post('/addPost', (req, res) => {
        console.log("Request ---", req.file);
        res.sendfile(req.file);
        res.sendStatus(200);
    });

app.post('/postUser', (req, res) => {
    users.push(req.body);
    res.sendStatus(200);
});

app.put('/checkUser', (req, res) => {
   const check = users.filter(item => item.user.email == req.body.login && item.user.password == req.body.password );
    res.sendStatus(200);
});

app.post('/addComment', (req, res) => {
    likecomment[1].comments[req.body.postID].push([req.body.user, req.body.comment]);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
