const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//replacing default mongoose promie with ES6 Promise as it is depreciated.
mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/medio');
mongoose.connection.once('open', () => {
    console.log('connection has been made..');
}).on('error', (error) => {
    console.log(error);
});

//routes

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//register routes

app.listen(port);
console.log('Server listening at port http://localhost:' + port);