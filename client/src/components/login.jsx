import React ,{useState} from 'react'
import style from '../css/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  axios.defaults.withCredentials = true
  const checkUser = async () =>{
    try {
      
      const response = await axios.post('https://student-crud-server-five.vercel.app/', {username,password}, {withCredentials:true})
      console.log(response.data)
      sessionStorage.getItem("accessToken", response.data.accessToken)
      if(response.data.message === 'login success'){
        navigate('/student_crud/dashboard')
      }

      if(response.data.message === 'Password incorrect'){
        console.log(response.data.message)
      }
      
      if(response.data.message === 'user not found'){
        console.log(response.data.message)
      }

     } catch (error) {
       console.log(error)
     }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    checkUser();
  }

  return (
    <div className={style.container}>
       <form onSubmit={handleSubmit}>
                <h2 className={style.title}>Login Account</h2>
                <label htmlFor="username">
                  <strong>Username:</strong>
                </label>
                <input type="text" id='username' placeholder='Enter your username' name='username' onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">
                <strong>Password:</strong>
                </label>
                <input type="password" id='password' placeholder='Enter your password' name='password' onChange={(e) => setPassword(e.target.value)} />

                <button className={style.login} type='submit'>Login</button>
                Dont have account yet? <Link to='/student_crud/register'>Register</Link>
            </form>
    </div>
  )
}

export default Login
