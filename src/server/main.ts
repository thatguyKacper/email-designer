import express from 'express';
import ViteExpress from 'vite-express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import compression from 'compression';
import emailRouter from './routes/email.routes';

const app = express();

app.disable('x-powered-by');
app.use(express.json()); // Parse body
app.use(cookieParser()); // Parse cookies
app.use(compression());

app.use(morgan('dev'));

app.use('/api/v1/designer', emailRouter);

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...'),
);
