import express from 'express';

import { router } from './routes';

const app = express();

/* PENDENCIA
 *  passar essa const para um arquivo .env
*/
const PORT = 9090;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('🤖️ Server running on port: ', PORT);
});
