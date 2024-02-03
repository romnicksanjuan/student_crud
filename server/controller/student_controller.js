const student = require('../model/student');
const Student = require('../model/student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const studentRegister = async (req,res) =>{
    const {username , password} = req.body;

    
    try {
        const check = await Student.findOne({username});
        if(check){
            res.json('username already exist');
        }else{
            const hash = await bcrypt.hash(password,10)
            const save = await Student.create({
                username,
                password:hash
            })
            res.json({message:"register successfuly"})
            console.log('data saved' + save)
        }
    } catch (error) {
        console.log(error)
    }
}

const studentRead = async (req,res) =>{
    try {
        const studentList = await Student.find();
        res.json(studentList);
    } catch (error) {
        console.log(error)
    }
}

const studentDelete = async (req,res) =>{
    const id = req.params.id
    try {
        const del = await Student.findByIdAndDelete(id);
        console.log({data_deleted: del})
        res.json({message:'deleted success'})
    } catch (error) {
        console.log(error)
    }
}

const getStudent = async(req,res)=>{
    const id = req.params.id;

    try {
        const getStudent = await Student.findById({_id:id})
        res.json(getStudent)
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req,res) =>{
    const id = req.params.id;
    const {username, password} = req.body
    try {
        
        const saveUpdate = await Student.findByIdAndUpdate({_id:id}, {username, password})
        res.json(saveUpdate)

        
    } catch (error) {
        console.log(error)
    }
}

const studentLogin = async (req,res) =>{
    const {username, password} = req.body;

    try {
        const stud = await Student.findOne({username});
        if(stud){
          const pass = bcrypt.compare(stud.password,password)
            if(pass){
                
                const accessToken = jwt.sign({id: stud.id, username:stud.username}, "secret", {expiresIn: '1m'})

                res.cookie('accessToken', accessToken, {httpOnly:true, maxAge: 60000})
                res.json({message:"login success"})
            }else{
                res.json({message:"Password incorrect"})
            }
        }else{
            res.json({message:"user not found"})
        }
    } catch (error) {
        console.log(error)
    }
}

const dashboard = (req,res) =>{

    const username = req.decoded.username

    res.json(username)

}


const verifyToken = (req,res, next) =>{
    const token = req.cookies.accessToken;

    if(!token){
        return res.json({message:"unautorized"})
    }

    jwt.verify(token, "secret", (err, decoded) => {
        if(err){
            res.json({message:"invalid token"});
        }
        // console.log(decoded.username)
        req.decoded = decoded
        next();
    })  

}

module.exports = {studentRegister,studentRead,studentDelete,getStudent,updateStudent,studentLogin,verifyToken, dashboard}