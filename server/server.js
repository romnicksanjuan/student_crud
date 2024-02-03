const express = require('express');
const connectDB = require('./config/db.js')
const dotenv = require('dotenv');
const cors = require('cors')
const studentRegister = require('./routes/student_route.js')
const studentLogin = require('./routes/login.js')
const Student = require('./model/student.js')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/student_crud')
.then(res => console.log("connected to db"))

app.use(cors(
    {
        origin:['http://localhost:5173'],
        methods:['POST', 'GET', 'DELETE', 'PUT'],
        credentials:true
    }
))
app.use(express.json());
app.use(cookieParser())
app.use('/student_crud', studentRegister)
app.use('/', studentLogin);


const port = process.env.PORT || 3000
app.listen((port), () =>{
    console.log(`server is running on port ${port}`)
})