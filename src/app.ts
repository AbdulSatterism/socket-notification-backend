/* eslint-disable no-undef */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// application routes

app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to realtime notification server');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
