import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { notFoundHandler } from './app/middleWares/notFoundHandler';
import router from './app/routes/routes';

const app: Application = express();

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Book Lover!');
});

app.use('/api/v1/', router);

app.use(globalErrorHandler);

app.use(notFoundHandler);

export default app;
