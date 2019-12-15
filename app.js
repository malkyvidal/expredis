const express = require('express');
const routes = require('./routes');
const path = require('path');
var errorHandlers = require('./middleware/errorhandlers');
const log = require('./middleware/log');
const partials = require('express-partials');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var app = express();

app.set("view engine", "ejs");
app.set("view options", { defaultLayout: 'layout' });
app.use(partials());
app.use(log.logger);
app.use(cookieParser());
app.use(session({ secret: 'secret' }));
app.use(function (req, res, next) {
    if (req.session.pageCount)
        req.session.pageCount++;
    else
        req.session.pageCount = 1;
    next();
});
app.use(express.static(path.join(__dirname, '/static')));
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.login);
app.get('/chat', routes.chat);
app.get('/error', function (req, res, next) {
    next(new Error("epa!!"));
})

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);
app.listen(3000, function () {
    console.log("escuchando en puerto 300");
})