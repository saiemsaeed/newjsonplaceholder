const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000,
    userRoutes = require('./routes/users'),
    postRoutes = require('./routes/posts');

var mongoose = require('mongoose')
require('./config.js');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res, next) => {
    res.status(200).send('Welcome to New JsonPlaceholder Api!!!')
})

app.listen(PORT, () => {
    console.log("SERVER IS LISTENING ON PORT", PORT);
});

