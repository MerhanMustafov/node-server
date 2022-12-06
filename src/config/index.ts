const mongoose = require('mongoose')
// import mongoose from 'mongoose';

class MongoDB {
  _url: string
  _options: { useNewUrlParser: boolean; useUnifiedTopology: boolean }
  constructor() {
    this._url = 'mongodb://localhost:27017/'
    this._options = { useNewUrlParser: true, useUnifiedTopology: true  }
  }

  get url() {
    return this._url
  }

  get options() {
    return this._options
  }

  connect() {
    mongoose.set('strictQuery', true)
    mongoose.connect(this._url, this._options)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', function () {
      console.log('Connected successfully')
    })
  }
}

export {MongoDB} 
// class Greeter {
//   greeting: string;

//   constructor(message: string) {
//     this.greeting = 'message';
//   }

//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// ({
//     mongoDB:{
//         url: "mdb connection string",
//         options: {useNewUrlParser: true, useUnifiedTopology: true},

//     }
// })
