import express from 'express';
import router from './routes/home.routes.js';

import otherRouter from './routes/other.routes.js';

const app = express();

//configure the app for requests...

//route to our files/endpoints
app.get("/home", (req, res) => res.send("Hello, world!"));

app.use("/", router);
app.use("/", otherRouter);

//start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));