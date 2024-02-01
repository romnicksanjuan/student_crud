const express = require('express');
const connectDB = require('./config/db.js')
const dotenv = require('dotenv');
const cors = require('cors')
const studentRegister = require('./routes/student_route.js')
// const studentLogin = require('./routes/login.js')
const Student = require('./model/student.js')
const mongoose = require('mongoose')
dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/student_crud')
.then(res => console.log("connected to db"))

app.use(cors(
    {
        origin:['https://student-crud-eta.vercel.app'],
        methods:['POST', 'GET'],
        credentials:true
    }
))
app.use(express.json());
app.use('/student_crud', studentRegister)
// app.use('/', studentLogin);

app.use('/student_crud/read', async (req,res) =>{
    try {
        const data = await Student.find({});
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})


const port = process.env.PORT
app.listen((port), () =>{
    
    console.log(`server is running on port ${port}`)
})