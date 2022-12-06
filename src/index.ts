import express from 'express';
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
import * as dotenv from "dotenv";
import {MongoDB} from './config'
// const {mongoDB} = require('./config')
dotenv.config();
const PORT = process.env.PORT || 3001;

// console.log(mongoDB)


const run = () => {
    // const db = new MongoDB
    // db.connect()
const app = express();
     mongoose.set('strictQuery', true)
    //  If you are using latest nodejs (v17.x) , then try updating mongodb url from localhost to 127.0.0.1
     mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection
    db.on('error', () => console.log('error on connection to mongoDB'))
    db.once('open', () => {
      console.log('Connected successfully')
    })
    // const {url, options} = mongoDB
    // mongoose.connect('url', {})
    app.get(`/`, (req: express.Request, res: express.Response) => {res.status(200).json({name: 'NAME'})});
    return [app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)), app];

};

const [server, app] = run();

  

export {server, app};


