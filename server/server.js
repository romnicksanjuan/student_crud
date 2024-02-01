const express = require('express');
const connectDB = require('./config/db.js')
const dotenv = require('dotenv');
const cors = require('cors')
const studentRegister = require('./routes/student_route.js')
const studentLogin = require('./routes/login.js')

dotenv.config();

const app = express();

app.use(cors(
    {
        origin:['https://student-crud-eta.vercel.app'],
        methods:['POST', 'GET'],
        credentials:true
    }
))
app.use(express.json());
app.use('/student_crud', studentRegister)
app.use('/', studentLogin);



const port = process.env.PORT
app.listen((port), () =>{
    connectDB();
    console.log(`server is running on port ${port}`)
})