require('dotenv').config()
import express from 'express';
import statusCodes from './statusCodes';
import catchError from './middleweres/catchError'
import UserRouter from './routes/user.router';
import 'express-async-errors';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (_req, res) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
  });

app.use(catchError)
app.use('/users', UserRouter)
  app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});  