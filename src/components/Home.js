import React from 'react'
import ResponsiveAppBar from '../components/Navigation';
import SignIn from '../components/SignIn';
import {data} from '../data/products'
import Products from './Products';
function Home() {
  console.log('token home ',localStorage.getItem('token'))
  
  return (
    <div>
        <ResponsiveAppBar/>
        <Products obj={data}/>
    </div>

  )
}

export default Home