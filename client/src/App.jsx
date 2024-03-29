import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/register';
import Read from './components/read';
import Update from './components/update';
import Login from './components/login';
import Dashboard from './components/dashboard';
function app(){

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/student_crud/register' element={<Register/>}></Route>
      <Route path='/student_crud/read' element={<Read/>}></Route>
      <Route path='/student_crud/update/:id' element={<Update/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/student_crud/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default app