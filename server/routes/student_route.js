const express = require('express');
const {studentRegister,studentRead,studentDelete,getStudent,updateStudent,verifyToken, dashboard} = require('../controller/student_controller')


const router = express.Router();

router.post('/register', studentRegister)
router.get('/read',verifyToken, studentRead)
router.delete('/delete/:id', studentDelete)
router.get('/update/:id', getStudent)
router.put('/update/:id', updateStudent )
router.get('/dashboard',verifyToken, dashboard )



module.exports = router;