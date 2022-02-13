import express from 'express';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';

const app = express();

app.use(express.json());
//이렇게 domain마다 따로 해주면 훨씬 깔끔함
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(8080);
