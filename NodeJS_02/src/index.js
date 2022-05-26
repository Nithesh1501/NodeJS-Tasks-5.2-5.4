const express = require('express');
const router = require('../controllers/routecontroller').router;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
