import axios, { Axios } from 'axios';
import React,{ useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import style from '../css/read.module.css'

const Read = () => {
    const [student, setStudent] = useState([]);

    useEffect(() =>{
        axios.get('https://student-crud-server-five.vercel.app/student_crud/read')
        .then(response => setStudent(response.data))
        .catch(error => console.log(error))
    },[])

    const handleSubmit = async (studId) =>{
      try {
        const response = await axios.delete(`https://student-crud-server-five.vercel.app/student_crud/delete/${studId}`)
        console.log(response.data)
        window.location.reload();
      } catch (error) {
        
      }
      
    }

  return (
    <div className={style.main}>
      <Link to='/student_crud/register'>Register</Link>
      <h2>read</h2>
      <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((stud) =>(
                <tr key={stud._id}>
                <td>{stud.username}</td>
                <td>{stud.password}</td>
                <td>
                  <Link to={`/student_crud/update/${stud._id}`}>Update</Link>
                  <button onClick={() => handleSubmit(stud._id)}>Delete</button>
                </td>
                </tr>
                ))
            }
            
        </tbody>
    </table>

    </div>
  )
}

export default Read
