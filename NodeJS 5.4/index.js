import express, { json } from 'express';
import { router } from './src/routes/router';

const app = express();

app.use(json());
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
