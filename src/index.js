const express = require ('express');
const path = require('path')
const morgan =  require('morgan');

const indexRouter = require('./routes/index.routes.js');


const app = express();

//setings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({axtended: false}))


//Routes

app.use(indexRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//initializing server

app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000")
});

