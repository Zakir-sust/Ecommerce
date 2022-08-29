import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Navigation from './Navigation'
const Homepage = () => {
  return (
    <div>
      <Navigation/>
      <p>Email: {localStorage.getItem('bemail')}</p>
      <p>Amount: {localStorage.getItem('bamount')}</p>
      <p>Amount: {localStorage.getItem('bid')}</p>
    </div>
  )
}

export default Homepage