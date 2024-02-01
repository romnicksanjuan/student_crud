const student = require('../model/student');
const Student = require('../model/student');

const studentRegister = async (req,res) =>{
    const {username , password} = req.body;

    try {
        const check = await Student.findOne({username});
        if(check){
            res.json('username already exist');
        }else{
            const save = await Student.create({
                username,
                password
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
        const check = await Student.findOne({username});
        if(check){
           
            if(check.password === password){
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

module.exports = {studentRegister,studentRead,studentDelete,getStudent,updateStudent,studentLogin}