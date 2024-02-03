import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    useEffect(() =>{
        axios.get('http://localhost:3000/student_crud/dashboard')
        .then(response =>{ console.log(response.data)
        if(response.data === "invalid token"){
            navigate('/')
            console.log("ss")
        }
    })
        .catch(error => console.log(error))
    },[])

  return (
    <div>
      <h2>welcome student</h2>
    </div>
  )
}

export default Dashboard
