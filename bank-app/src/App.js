import React,{useState} from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/Signup'
import Navigation from './components/Navigation'
import Homepage from './components/info'
import Update from './components/Update'
import { useCookies } from 'react-cookie'

function App() {
  const [cookie,setCookie] = useCookies('user')
  const [loggedin,setloggedin] = useState(0)
  console.log(localStorage.getItem('token'))
  
  return (
    <Router>
      <div className="App">
        {/* <Navigation/> */}
        {/* {localStorage.getItem('btoken')?<Navigation/>:<LoginNavigation/>} */}
        <div className="">
          <div className="">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path = "/info" element={<Homepage/>} />
              <Route path = "/update" element={<Update/>} />
            </Routes>
          </div>
        </div>
      </div>
      
    </Router>
  )
}
export default App  