const express = require('express');
const {studentRegister,studentRead,studentDelete,getStudent,updateStudent} = require('../controller/student_controller')


const router = express.Router();

router.post('/register', studentRegister)
router.get('/read', studentRead)
router.delete('/delete/:id', studentDelete)
router.get('/update/:id', getStudent)
router.put('/update/:id', updateStudent )



module.exports = router;