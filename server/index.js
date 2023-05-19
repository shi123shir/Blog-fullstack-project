const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
var cookieParser = require('cookie-parser');
const path = require('path');


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const errorHandler = require('./middleware/error');

//import routes
const authRoutes = require('./routes/authRoutes');
const postRoute = require('./routes/postRoute');


//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


    //MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());

// router middleware
app.use("/api",authRoutes)
app.use('/api', postRoute);

//error middleware
app.use(errorHandler);

const port = process.env.PORT || 9000


// app.listen(port , ()=>{
//     console.log(`server is running on port ${port}`)
// })

io.on('connection', (socket) => {
    //console.log('a user connected', socket.id);
    socket.on('comment', (msg) => {
        // console.log('new comment received', msg);
        io.emit("new-comment", msg);
    })
})

exports.io = io

server.listen(port, () => {
    console.log(` Server running on port ${port}`);
})






