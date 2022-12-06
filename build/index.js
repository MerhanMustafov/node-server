"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.server = void 0;
const express_1 = __importDefault(require("express"));
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const dotenv = __importStar(require("dotenv"));
// const {mongoDB} = require('./config')
dotenv.config();
const PORT = process.env.PORT || 3001;
// console.log(mongoDB)
const run = () => {
    // const db = new MongoDB
    // db.connect()
    const app = (0, express_1.default)();
    mongoose.set('strictQuery', true);
    //  If you are using latest nodejs (v17.x) , then try updating mongodb url from localhost to 127.0.0.1
    mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', () => console.log('error on connection to mongoDB'));
    db.once('open', () => {
        console.log('Connected successfully');
    });
    // const {url, options} = mongoDB
    // mongoose.connect('url', {})
    app.get(`/`, (req, res) => { res.status(200).json({ name: 'NAME' }); });
    return [app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)), app];
};
const [server, app] = run();
exports.server = server;
exports.app = app;
