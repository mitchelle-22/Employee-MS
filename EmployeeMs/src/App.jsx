
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import Employee from './Component/Employee'
import Category from './Component/Category'
import Profile from './Component/Profile'

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path = '/adminlogin' element={<Login/>}></Route>
    <Route path = '/dashboard' element={<Dashboard/>}>
    <Route path = '' element={<Home/>}></Route>
      <Route path = '/dashboard/employee' element={<Employee/>}></Route>
      <Route path = '/dashboard/category' element={<Category/>}></Route>
      <Route path = '/dashboard/profile' element={<Profile/>}></Route>

    </Route>
      
      
  </Routes>
  </BrowserRouter>
  )
}

export default App
