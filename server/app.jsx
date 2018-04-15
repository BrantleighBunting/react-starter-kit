/* Place server code here */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import request from 'request';

/* To serve up client code */
import { Server } from 'http';

const app = express();
app.use(cors()); /* Cross Origin Access */

/* serves up index.html from dist */
app.use(express.static(path.join(__dirname, "../dist/client")));

/* Allows json responses from api endpoints */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => { /* Serve our html from the production server */
    res.sendFile(path.resolve('dist/server/public/index.html'));
});


app.get('/hello', (req, res) => {
	res.send("Hello World (from api)!");
});

app.listen(7777,() => { console.log("Started listening on port", 7777); });
