import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const token = sessionStorage.getItem('accessToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(() =>{
        axios.get('https://student-crud-server-five.vercel.app/student_crud/dashboard')
        .then(response =>{ {
        setUsername(response.data)

        if(response.data.message){
          navigate('/')
          alert('please login again')
        }
        }
    })
        .catch(error => console.log(error))
    },[])

  return (
    <div>
      {
        username && 
<h2>welcome {username}!</h2>
        
      }
      
    </div>
  )
}

export default Dashboard
