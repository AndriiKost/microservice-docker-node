import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';
import { onError } from './utils/server';

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const port = Number(process.env.EXPRESS_PORT || '8000');
const app = express();
app.set('port', port);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./routes/index'));

const server = http.createServer(app);
server.listen(port);

server.on('error', (err) => onError(err, port));

server.on('listening', () => {
    console.log('Car API is listening on: ' + port);
});