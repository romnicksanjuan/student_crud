import axios from 'axios';
import { useState } from 'react';
import style from '../css/register.module.css'
import {Link} from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/student_crud/register', {username,password})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return(
        <>
         <div className={style.container}>
      <form onSubmit={handleSubmit}>
      <h2 className={style.title}>Register Account</h2>

      <div className='mb-3'>
      <label htmlFor="username">
      <strong>Username:</strong>
      </label>
      <input type="text" name="username" id="username" autoComplete='off' placeholder='Enter your username' className='form-control rounded-0' onChange={(e) => setUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='Enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className={style.register}>Register</button>
  <p>Already have an account? <Link to="/">Login</Link></p>

  </form>
  </div>
        
        </>
    )

}

export default Register