import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://student-crud-server-five.vercel.app/student_crud/update/' + id)
            .then(response => {
                setUsername(response.data.username)
                setPassword(response.data.password)
            })
            .catch(error => console.log(error))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put('https://student-crud-server-five.vercel.app/student_crud/update/' + id, { username, password })
        .then(response => {console.log(response.data)
        navigate('/student_crud/read')})
        .catch(err => console.log(err))




    }


    return (
        <>
            <div>
                <form onSubmit={handleUpdate} >
                    <h2>Update Account</h2>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' name='username' value={username || ''} onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="text" id='password' name='password' value={password || ''} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit'>Submit</button>
                </form>
            </div>

        </>
    )

}

export default Update
